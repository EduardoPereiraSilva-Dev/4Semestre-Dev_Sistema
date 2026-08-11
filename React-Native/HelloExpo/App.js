import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>

        <View style={styles.container}>
          <Text style={styles.text}>Hello word</Text>
          <Text style={styles.text}>Eduardo Pereira</Text>
          <StatusBar style="auto" />
        </View >

      </SafeAreaView>
    </SafeAreaProvider >
  );
}

