# 🪐 Nasa-photoworker

[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

This app gives you the opportunity to get and share photos from Mars using [NASA API](https://api.nasa.gov/).

## Getting Started

To get a local copy up and
running follow these simple example steps.

### Installation

1. Get a free API Key at [https://nasa.com](https://api.nasa.gov/)
2. Clone the repo
   ```sh
   git clone https://github.com/1037cs/nasa-photoworker.git
   ```
3. Install yarn packages
   ```sh
   yarn
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER HERE';
   ```
5. Start Metro Builder and follow instructions to select your device
   ```sh
   yarn start
   ```

### Usage

Firstly you should select the type of Rover's camera and date of Mars exploring. Then app will show your both photos
from this day and you can open them.
