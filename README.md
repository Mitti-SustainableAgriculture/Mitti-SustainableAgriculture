# 🌱 Mitti - Sustainable Agriculture Solution

## Overview
**Mitti** is a smart solution designed to revolutionize sustainable farming practices. By leveraging real-time soil data, machine learning, and weather insights, Mitti provides personalized fertilizer recommendations to optimize agricultural productivity while promoting eco-friendly practices. 🌾

---

## ✨ Features
- **Real-Time Soil Analysis**: Integration with NPK, moisture, and pH sensors to capture soil health data.
- **Tailored Fertilizer Recommendations**: Machine learning-powered suggestions based on soil health, crop type, and weather patterns.
- **Weather Integration**: Location-based updates using OpenWeather and Open-Meteo APIs.
- **Multi-Channel Alerts**: Notifications via SMS and email to ensure farmers are always informed.
- **Crop and Soil Health Reports**: Comprehensive insights to help farmers make informed decisions.

---

## 🛠️ Technologies Used
### Hardware:
- NPK Sensor
- Soil Moisture Sensor
- pH Sensor
- Microcontroller (Arduino Uno)
- ESP32
- MAX485 Module
- OLED Display (128x32)

### Software:
- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Flask, Express.js, Node.js
- **Machine Learning**: NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch
- **APIs**: OpenWeather API, Open-Meteo API, SMS/Email API

---

## 🚀 Installation and Setup
### Prerequisites
- Node.js and npm
- Python 3.9+
- Arduino IDE

### Steps
1. Clone the repository:
   ```bash
   https://github.com/Mitti-SustainableAgriculture/Mitti-SustainableAgriculture.git
   ```

2. Install dependencies:
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For the backend:
     ```bash
     cd python-backend
     pip install -r requirements.txt
     ```
   - For the fertilizer backend:
     ```bash
     cd python_fertilizer
     pip install -r requirements.txt
     ```

3. Set up environment variables:
   - Create `.env.local` in the frontend and backend directories.
   - Add the required API keys and configurations.

4. Start the services:
   - Frontend:
     ```bash
     npm run dev
     ```
   - Backend:
     ```bash
     flask run --port=5002
     ```

5. Deploy the microcontroller firmware using the Arduino IDE.

---

## 🔌 Hardware Setup

### 🧪 Components Required

| Component             | Quantity | Description                                     |
|-----------------------|----------|-------------------------------------------------|
| Arduino Uno/Nano      | 1        | Main microcontroller board                      |
| Soil NPK Sensor       | 1        | Measures Nitrogen (N), Phosphorous (P), and Potassium (K) |
| MAX485 Module         | 1        | RS-485 to TTL converter for NPK sensor         |
| Soil Moisture Sensor  | 1        | Measures soil moisture level                   |
| DHT11 Sensor          | 1        | Captures temperature and humidity              |
| OLED Display (SSD1306)| 1        | I2C-based screen (128x32 or 128x64)            |
| Jumper Wires          | -        | For circuit connections                        |
| Breadboard            | 1        | For prototyping and testing                    |

### 🧠 Firmware

The Arduino sketch is available in the `hardware` folder as `soil_monitor.ino`.

#### ✅ Features:
- Reads NPK values using Modbus communication.
- Displays temperature, humidity, and soil moisture.
- Outputs all sensor data to both Serial Monitor and OLED display.

#### 🚦 Upload Instructions:
1. Open `soil_monitor.ino` in the Arduino IDE.
2. Select the correct **Board** and **COM Port**.
3. Click **Upload** to flash the code to the microcontroller.
4. Open the **Serial Monitor** at `9600 baud` to see real-time data.

---

## 🧑‍🌾 Usage
1. Connect the sensors to the hardware setup.
2. Input the soil data manually or allow automatic data capture.
3. View fertilizer recommendations on the web app.
4. Receive recommendations via SMS or email.

---

## 🌟 Future Scope
- Expand support for more sensors and crop types.
- Enhance machine learning models for better accuracy.
- Develop a mobile application for easier access.
- Integrate blockchain for transparency in supply chains.

---

## 🤝 Contributing
We welcome contributions! Please create a pull request or submit an issue for feature suggestions or bug reports.

---

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## 🙏 Acknowledgments
- Team **TechFrost**
- Farmers and Agricultural Experts who inspired this solution.
