"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

@api.route("/token", methods=["POST"])
def create_token():
    if request.json is None:
        return jsonify({"msg": "Body Empty!"}), 401
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        raise APIException("User Not Found!")
    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user_id": user.id})

@api.route("/user", methods=["POST"])
def create_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user_name = request.json.get("user_name", None)
    user = User(email=email, password=password, user_name=user_name)
    db.session.add(user)
    db.session.commit()
    return jsonify(**user.serialize())