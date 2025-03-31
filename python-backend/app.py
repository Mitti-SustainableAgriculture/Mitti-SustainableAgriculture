from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import os  # Make sure to import this

app = Flask(__name__)
CORS(app, origins=["*"])  # Allow all origins for now

# Load the trained model
with open("model.pkl", "rb") as file:
    model = pickle.load(file)

# Define a simple route for the root URL
@app.route('/')
def home():
    return "Backend is running successfully!"

# Define the route to handle form submissions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get form data from request
        data = request.json
        nitrogen = float(data['nitrogen'])
        phosphorus = float(data['phosphorus'])
        potassium = float(data['potassium'])
        temperature = float(data['temperature'])
        humidity = float(data['humidity'])
        ph = float(data['ph'])
        rainfall = float(data['rainfall'])
        soil = data['soil']

        # Encode soil types (based on your model encoding)
        soil_types = {
            'Alluvial Soil': 0,
            'Black Soil': 1,
            'Forest': 2,
            'Laterite': 3,
            'Red Soil': 4
        }
        soil_encoded = soil_types.get(soil, 0)

        # Create the input array for the model
        input_data = np.array([[nitrogen, phosphorus, potassium, temperature, humidity, ph, rainfall, soil_encoded]])

        # Predict the crop using the model
        prediction = model.predict(input_data)[0]

        # List of crops corresponding to the model's output
        crops = ['apple', 'banana', 'blackgram', 'chickpea', 'coconut', 'cotton', 'grapes', 'jute',
                 'lentil', 'maize', 'mango', 'muskmelon', 'orange', 'papaya', 'pigeonpeas',
                 'pomegranate', 'rice', 'watermelon']
        crop_name = crops[prediction]

        # Send the result back to the frontend
        return jsonify({'crop': crop_name})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # Use PORT from environment variable for Render compatibility
    app.run(host='0.0.0.0', port=port)
