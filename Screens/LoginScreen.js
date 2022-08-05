import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import { createDrawerNavigator } from '@react-navigation/drawer';
export default function App() {
  return (
   <View style={styles.container}>
    <Switch>
    <TouchableOpacity onPress={this.signInWithGoogleAsync()}>
      <Text> Sign in With Google </Text>
    </TouchableOpacity>
    </Switch>
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