
import { StatusBar } from 'expo-status-bar';
import { Text, View, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './Componentes/Header/Header';
import { styles } from './Styles';
import { FormTask } from './Componentes/formTask/FormTask';

function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <Header />
                <FormTask />
                <View style={styles.container}>
                    <Text>My App</Text>
                    <StatusBar style="auto" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}



export default App;
