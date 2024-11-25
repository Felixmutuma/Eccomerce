#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, jsonify
from config import bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_restful import Api, Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import User, Product, Category, Order, OrderItem, Payment

# Views go here!
@app.route('/')
def index():
    return '<h1>Project Server</h1>'

# --- User Endpoints ---
class RegisterUser(Resource):
    def post(self):
        data = request.get_json()
        hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        new_user = User(name=data['name'], email=data['email'], password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User registered successfully!"})

class LoginUser(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter_by(email=data['email']).first()
        if user and bcrypt.check_password_hash(user.password, data['password']):
            access_token = create_access_token(identity=user.id)
            return jsonify(access_token=access_token)
        return jsonify({"message": "Invalid credentials"}), 401

class GetUserProfile(Resource):
    @jwt_required()
    def get(self, user_id):
        current_user_id = get_jwt_identity()
        if current_user_id != user_id:
            return jsonify({"message": "Unauthorized"}), 403
        user = User.query.get(user_id)
        if user:
            return jsonify({"id": user.id, "name": user.name, "email": user.email})
        return jsonify({"message": "User not found"}), 404

# --- Product Endpoints ---
class GetProducts(Resource):
    def get(self):
        products = Product.query.all()
        return jsonify([product.serialize() for product in products])

class GetProduct(Resource):
    def get(self, product_id):
        product = Product.query.get(product_id)
        if product:
            return jsonify(product.serialize())
        return jsonify({"message": "Product not found"}), 404

class CreateProduct(Resource):
    @jwt_required()
    def post(self):
        data = request.get_json()
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        if not user or not user.is_admin:
            return jsonify({"message": "Unauthorized"}), 403
        
        category = Category.query.get(data['category_id'])
        if not category:
            return jsonify({"message": "Category not found"}), 404
        
        new_product = Product(
            name=data['name'],
            description=data['description'],
            price=data['price'],
            stock=data['stock'],
            color=data['color'],
            category_id=category.id
        )
        db.session.add(new_product)
        db.session.commit()
        return jsonify({"message": "Product created successfully!"})

# --- Order Endpoints ---
class CreateOrder(Resource):
    @jwt_required()
    def post(self):
        data = request.get_json()
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        if not user:
            return jsonify({"message": "Unauthorized"}), 403
        
        new_order = Order(user_id=user.id, total_amount=data['total_amount'], status="Pending")
        db.session.add(new_order)
        db.session.commit()

        for item in data['items']:
            order_item = OrderItem(order_id=new_order.id, product_id=item['product_id'], quantity=item['quantity'], price=item['price'])
            db.session.add(order_item)
        
        db.session.commit()
        return jsonify({"message": "Order created successfully!"})

class GetOrders(Resource):
    @jwt_required()
    def get(self):
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        if not user:
            return jsonify({"message": "Unauthorized"}), 403
        
        orders = Order.query.filter_by(user_id=user.id).all()
        return jsonify([order.serialize() for order in orders])

# --- Payment Endpoints ---
class CreatePayment(Resource):
    @jwt_required()
    def post(self):
        data = request.get_json()
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        if not user:
            return jsonify({"message": "Unauthorized"}), 403
        
        order = Order.query.get(data['order_id'])
        if not order or order.user_id != current_user_id:
            return jsonify({"message": "Order not found or unauthorized"}), 404

        new_payment = Payment(
            order_id=order.id,
            payment_method=data['payment_method'],
            payment_status=data['payment_status']
        )
        db.session.add(new_payment)
        db.session.commit()
        return jsonify({"message": "Payment created successfully!"})

# --- API Endpoints Setup ---
api.add_resource(RegisterUser, '/api/users/register')
api.add_resource(LoginUser, '/api/users/login')
api.add_resource(GetUserProfile, '/api/users/<int:user_id>')
api.add_resource(GetProducts, '/api/products')
api.add_resource(GetProduct, '/api/products/<int:product_id>')
api.add_resource(CreateProduct, '/api/products')
api.add_resource(CreateOrder, '/api/orders')
api.add_resource(GetOrders, '/api/orders')
api.add_resource(CreatePayment, '/api/payments')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
