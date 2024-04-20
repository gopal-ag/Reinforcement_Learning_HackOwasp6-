![Screenshot 2024-04-21 at 5 03 40 AM](https://github.com/gopal-ag/Reinforcement_Learning_HackOwasp6-/assets/82232811/c72425fa-d661-4c80-bbb6-3beef073dbca)# Patiala City Enforcement Tracking

![Uploading Screenshot 2024-04-21 at 5.03.40 AM.png…]

This project is a demonstration of a real-time tracking system for law enforcement in Patiala City. It visualizes the locations of criminal cars, police cars, and chokepoints on a map, with dynamic updates based on data from a Flask backend. The frontend uses MapLibre for map visualization, and the backend uses Flask to generate new chokepoint locations based on criminal car positions.

## Prerequisites

To run this project, you need the following:

- Python 3.x installed on your system
- Flask library (install with `pip install Flask`)
- Basic knowledge of HTML, JavaScript, and Flask
- A text editor or IDE for coding
- A local server or web server to host the frontend

## Setup Instructions

1. **Clone the Repository**
   Clone this repository or create a new folder to store the project files.

2. **Set Up the Flask Backend**
   - Create a Python file (e.g., `app.py`) with the Flask code from the given example.
   - Ensure Flask is installed in your Python environment. If not, install it with `pip install Flask`.
   - Start the Flask server with `python app.py`.
   - The server should start on `http://127.0.0.1:5000` by default.

3. **Set Up the Frontend**
   - Create an HTML file (e.g., `index.html`) with the provided JavaScript code.
   - Open the HTML file in a web browser to view the map.
   - Ensure the Flask server is running to allow the frontend to fetch data for chokepoints.

## Usage Instructions

1. **Starting the Flask Backend**
   Run `python app.py` in the terminal to start the Flask server. This server provides new chokepoint locations based on criminal car coordinates.

2. **Viewing the Map**
   Open `index.html` in a web browser. You should see the map centered on Patiala City with markers for criminal cars, police cars, and chokepoints.

3. **Updating Chokepoints**
   The frontend automatically fetches new chokepoints from the Flask server every 10 seconds. This simulates real-time updates based on a reinforcement model or other backend logic.

## Customization

- **Change the Criminal Car Location**
  Modify the initial coordinates in the JavaScript code to change the starting position of the criminal car.

- **Update Chokepoints**
  The Flask backend creates random chokepoints based on the criminal car's location. You can modify the logic to use other methods or models.

- **Adjust Refresh Interval**
  In the frontend JavaScript code, change the interval for fetching new chokepoints (currently 10 seconds).


