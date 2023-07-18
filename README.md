# Real Time Weather App
<img style="width:30%" src="https://img.freepik.com/free-psd/3d-icon-weather-conditions-with-rain-sun_23-2150108737.jpg?w=740&amp;t=st=1688895473~exp=1688896073~hmac=76da3c2169dc2780677a9f0ac85eeb02ea481283bb81aaeedfe747839042e9ad">
<!-- ![Weather App](https://img.freepik.com/free-psd/3d-icon-weather-conditions-with-rain-sun_23-2150108737.jpg?w=740&amp;t=st=1688895473~exp=1688896073~hmac=76da3c2169dc2780677a9f0ac85eeb02ea481283bb81aaeedfe747839042e9ad) -->

## Description

The Weather App is a web application that allows users to check the weather for any location. Users can sign up or log in to access the weather information. Once logged in, they can simply enter the location name, and the app will display the weather details for that location. The app utilizes Redis for caching weather data, reducing the number of API calls to the weather service, and MongoDB for storing user details.

## Features

- User Authentication: Users can sign up or log in to access the weather information.
- Weather Data Caching: Weather data is cached in Redis, reducing the need for repeated API calls.
- Responsive Design: The app is designed to work seamlessly on different devices and screen sizes.

## Tech Stack

- Frontend: React, Chakra UI
- Backend: Node.js, Express.js, MongoDB, Redis

## Getting Started

1. Clone the repository: `git clone https://github.com/shaikhshahbaz4022/Real-Time-Weather.git`
2. Install dependencies for both frontend and backend: `cd weather-app && npm install`
3. Start the backend server: `npm run server`
4. Start the frontend development server: `npm run start`
5. Open your browser and go to `http://localhost:3000` to access the Weather App.

## Deployment

-The Weather App is deployed and can be accessed at [Real-Time-Weather
](https://real-time-weather-two.vercel.app/) <br/>
-The Backend is Deployed On Render

## Screenshots

### Homepage
![HomePage](https://github.com/shaikhshahbaz4022/Real-Time-Weather/assets/119395145/662061d6-e601-4007-8a14-bea513c6e5dc)

### Signup Page
![SignUp Page](https://github.com/shaikhshahbaz4022/Real-Time-Weather/assets/119395145/9c13f2c1-66ed-465b-a42b-be8ed715ec5b)
### Login Page
![Login-page](https://github.com/shaikhshahbaz4022/Real-Time-Weather/assets/119395145/70cefabe-382e-4148-b461-4067500ebcb6)
### Weather Search Page
![Weather Page](https://github.com/shaikhshahbaz4022/Real-Time-Weather/assets/119395145/5df10b37-0867-4270-a413-5362fc115f0c)

## Credits

This Weather App was created by Shahbaz Shaikh.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own projects.
