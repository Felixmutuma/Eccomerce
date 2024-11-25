#!/usr/bin/env python3

# Standard library imports
import random
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import *

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
    # Clear the existing data (Optional)
        db.drop_all()  # Drop all tables (only for development, avoid in production)
        db.create_all()  # Recreate all tables

        # Create sample categories
        categories = ['Men', 'Women', 'Kids', 'Accessories', 'Sale']
        for category_name in categories:
            category = Category(name=category_name, description=f"Category for {category_name} items.")
            db.session.add(category)
        
        db.session.commit()  # Commit the categories

        # Create sample users
        for _ in range(10):  # Create 10 users
            user = User(
                name=fake.name(),
                email=fake.email(),
                password=fake.password(length=10),
            )
            db.session.add(user)

        db.session.commit()  # Commit users

        # Create sample products
        for _ in range(20):  # Create 20 products
            category = random.choice(Category.query.all())  # Random category selection
            product = Product(
                name=fake.word(),
                description=fake.sentence(),
                price=round(random.uniform(10, 200), 2),
                stock=random.randint(5, 100),
                color=fake.color_name(),
                category_id=category.id
            )
            db.session.add(product)
        
        db.session.commit()  # Commit products

        # Create sample orders and order items
        for _ in range(5):  # Create 5 orders
            user = random.choice(User.query.all())  # Random user selection
            order = Order(
                user_id=user.id,
                total_amount=round(random.uniform(20, 500), 2),
                status=random.choice(['Pending', 'Shipped', 'Delivered'])
            )
            db.session.add(order)

            # Add order items (each order will have 2-5 items)
            for _ in range(random.randint(2, 5)):
                product = random.choice(Product.query.all())  # Random product selection
                order_item = OrderItem(
                    order_id=order.id,
                    product_id=product.id,
                    quantity=random.randint(1, 3),
                    price=product.price
                )
                db.session.add(order_item)

            db.session.commit()  # Commit orders and items

        # Create sample payments
        for order in Order.query.all():
            payment = Payment(
                order_id=order.id,
                payment_method=random.choice(['Mpesa', 'Credit Card', 'PayPal']),
                payment_status=random.choice(['Completed', 'Pending', 'Failed']),
            )
            db.session.add(payment)

        db.session.commit()  # Commit payments

        print("Database seeded successfully!")