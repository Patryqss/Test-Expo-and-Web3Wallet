import '@walletconnect/react-native-compat'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Core } from '@walletconnect/core'
import { Web3Wallet } from '@walletconnect/web3wallet'

export default function App() {
  async function createWeb3Wallet() {
    const core = new Core({
      // Add your own projectID
      projectId: ""
    })
    
    const web3wallet = await Web3Wallet.init({
      core, // <- pass the shared `core` instance
      metadata: {
        name: 'Demo React Native Wallet',
        description: 'Demo RN Wallet to interface with Dapps',
        url: 'www.walletconnect.com',
        icons: ['https://your_wallet_icon.png'],
        redirect: {
          native: 'yourwalletscheme://'
        }
      }
    })
    console.log('All good!');
  }

  return (
    <View style={styles.container}>
      <Text>Click the button below to crash the app!</Text>

      <Button title='Click me!' onPress={createWeb3Wallet} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
