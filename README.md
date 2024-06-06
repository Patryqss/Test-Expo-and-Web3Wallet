# Test app

Created to show a bug while trying to create a Web3Wallet instance on iOS Simulator.

Before runnning, open `App.js` and add your projectID to line 12. It can be generated here -> https://cloud.walletconnect.com/sign-in

Then run
```
npm i
npm run ios
```

First, you'll notice an Error in the console:
`ERROR  react-native-compat: Application module is not available`

Then, click on the button "Test web3wallet creation" and see that the app crashes :) 
