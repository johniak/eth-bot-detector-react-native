# Ethereum Bot Detector React Native App
## Stack + Technologies

- TypeScript
- ReactNative
- Firebase
- react-native-dotenv


## Description
This project is just the most simple App to receive push notfications. Firebase is configured only for ios, right now.

## Functions
1. Registering FCM tokens into backend
2.  Receiving push notifications
3. Receiving push notifications inside app

## How to run
1. Create `.env` file based on `.env.example`, and fill empty fields
2. If you set `API_URL` to domain/address without `https` you need to add it to `NSAppTransportSecurity` in info.plist in ios project
3. Create and copy your `GoogleService-Info.plist` to the same location where `info.plist` exist in your ios project
4. 
    ```bash
    yarn install
    cd ios
    pod install --repo-update
    cd ..
    ```
5. Run Metro by yourself in your favourite terminal, otherwise it will start in default terminal app
   ```bash
   yarn start
   ```
6. In a different terminal/shell run:
   ```bash
    yarn ios
    ```

