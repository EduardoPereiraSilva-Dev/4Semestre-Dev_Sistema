import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function AppScrollView() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}
                contentContainerStyle={styles.content}>
                <ScrollView style={styles.container}>
                    <Text style={styles.text}>A Maria Eduarda Precisa calar a boca</Text>
                    <StatusBar style="auto" />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider >
    );
}

const styles = StyleSheet.create({
    safeArea: {
        color: "#ffffff",
        flex: 1,
        backgroundColor: "#564787"
    },


    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    content: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    text: {
        fontSize: 24,
        marginBottom: 20
    }
}
);

