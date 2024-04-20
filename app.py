from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route('/get_new_locations', methods=['GET'])
def get_new_locations():

    criminal_x = float(request.args.get('xloc'))
    criminal_y = float(request.args.get('yloc'))
    

    x_min = criminal_x - 0.01
    x_max = criminal_x + 0.01
    y_min = criminal_y - 0.01
    y_max = criminal_y + 0.01

    new_chokepoint_1 = {
        "coordinates": [random.uniform(x_min, x_max), random.uniform(y_min, y_max)],
        "name": "Chokepoint A",
        "color": "green"
    }
    
    new_chokepoint_2 = {
        "coordinates": [random.uniform(x_min, x_max), random.uniform(y_min, y_max)],
        "name": "Chokepoint B",
        "color": "orange"
    }

    return jsonify([new_chokepoint_1, new_chokepoint_2])

if __name__ == '__main__':
    app.run(debug=True)
