# 🪐 Nasa-photoworker

This app gives you the opportunity to get and share photos from Mars using [NASA API](https://api.nasa.gov/).

## Getting Started

This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

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
Firstly you should select the type of Rover's camera and date of Mars exploring. Then app will show your both photos from this day and you can open them.
