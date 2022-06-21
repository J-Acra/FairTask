from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_name = db.Column(db.String(255), nullable = False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    def __repr__(self):
        return f'<User{self.id} {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "user_name": self.user_name,
        }