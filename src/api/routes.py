"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from hashlib import sha256

api = Blueprint('api', __name__)

@api.route("/token", methods=["POST"])
def create_token():
    hash_type = sha256()
    if request.json is None:
        return jsonify({"msg": "Body Empty!"}), 401
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if not email:
        return jsonify({"message": "email is empty"}), 400
    if not password:
        return jsonify({"message": "password is empty"}), 400
    hash_type.update(password.encode('utf-8'))
    hash = hash_type.hexdigest()
    user = User.query.filter_by(email=email, password=hash).first()
    if user is None:
        raise APIException("User Not Found!")
    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user_id": user.id})

@api.route("/user", methods=["POST"])
def create_user():
    if request.json is None:
        return jsonify({"msg": "Body Empty!"}), 401
    hash_type = sha256()
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user_name = request.json.get("user_name",None)
    if not email:
        return jsonify({"message": "email is empty"}), 400
    if not password:
        return jsonify({"message": "password is empty"}), 400
    hash_type.update(password.encode('utf-8'))
    hash = hash_type.hexdigest()
    user = User(email=email, password=hash, user_name=user_name)
    db.session.add(user)
    db.session.commit()
    return jsonify(**user.serialize())

@api.route("/user", methods=["GET"])
@jwt_required()
def get_self():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    return jsonify(user.serialize())

@api.route("/user", methods=["PUT"])
@jwt_required()
def edit_user():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    email = request.json.get("email")
    user.email = email
    db.session.add(user)
    db.session.commit()
    return jsonify("User successfully updated")
