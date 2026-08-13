
import { StatusBar } from 'expo-status-bar';
import { Text, View, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './Componentes/Header/Header';
import { styles } from './Styles';
import { FormTask } from './Componentes/formTask/FormTask';
import { TaskList } from './Componentes/tasklist/TaskList';
import { TaskProvider } from './Context/TaskContext';

function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <TaskProvider>
                    <View style={styles.container}>
                        <Header />
                        <FormTask />
                        <TaskList />
                        <StatusBar style="auto" />
                    </View>
                </TaskProvider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}



export default App;
