from flask import Flask, jsonify, request
from diagnose import diagnose_ntd
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return jsonify("test")

@app.route('/diagnose', methods=['POST'])
def diagnose():
    data = request.get_json()
    response = diagnose_ntd(data)
    return response
