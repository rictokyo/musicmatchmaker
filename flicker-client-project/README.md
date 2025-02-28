# Flicker Client Project

## Overview
Flicker is a client-server application designed for educational purposes, allowing users to log in as either teachers or students. The project consists of an Android application and a web application, both of which communicate with a Node.js server connected to a MongoDB database.

## Project Structure
The project is organized into three main directories:
- **android**: Contains the Android application code.
- **web**: Contains the web application code.
- **server**: Contains the Node.js server code.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running, or access to a MongoDB cloud instance.
- Android Studio for Android development.

### Installation

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd flicker-client-project
   ```

2. **Set up the server**
   - Navigate to the server directory:
     ```
     cd server
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file in the server directory and add your MongoDB connection string and any other necessary environment variables.
   - Start the server:
     ```
     node src/app.js
     ```

3. **Set up the web application**
   - Navigate to the web directory:
     ```
     cd ../web
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the web application:
     ```
     npm start
     ```

4. **Set up the Android application**
   - Open the Android directory in Android Studio.
   - Sync the project with Gradle files.
   - Run the application on an emulator or physical device.

## Usage
- Users can log in as either a teacher or a student through the login interface.
- After logging in, users will be directed to their respective dashboards.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.