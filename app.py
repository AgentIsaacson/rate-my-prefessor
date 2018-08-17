from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'app.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Professor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False)
    school = db.Column(db.String(144), unique=False)

    def __init__(self, name, school):
        self.name = name
        self.school = school


class ProfessorSchema(ma.Schema):
    class Meta:
        fields = ('name', 'school')


professor_schema = ProfessorSchema()
professors_schema = ProfessorSchema(many=True)

# Endpoint to create a new professor


@app.route('/professor', methods=["POST"])
def add_professor():
    name = request.json['name']
    school = request.json['school']

    new_professor = Professor(name, school)

    db.session.add(new_professor)
    db.session.commit()

    professor = Professor.query.get(new_professor.id)

    return professor_schema.jsonify(professor)


# Endpoint to query all professors
@app.route("/professors", methods=["GET"])
def get_professors():
    all_professors = Professor.query.all()
    result = professors_schema.dump(all_professors)
    return jsonify(result.data)


# Endpoint to query a single professors
@app.route("/professor/<id>", methods=["GET"])
def get_professor(id):
    professor = Professor.query.get(id)
    return professor_schema.jsonify(professor)


if __name__ == '__main__':
    app.run(debug=True)
