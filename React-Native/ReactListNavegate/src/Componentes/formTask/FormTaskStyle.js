import { StyleSheet } from "react-native";


export const FormTaskStyle = StyleSheet.create({
    frmTaskBox: {
        width: "100%",
        // height: 200,

        backgroundColor: "#1d2135",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "transparent",
    },
    faskInputName: {
        width: "100%",
        height: 40,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 5

    },
    taskButton: {
        width: "100%",
        height: 40,
        padding: 10,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: "#60a771"
    },
    taskButtonText: {
        color: "#fff",
        textAlign: "center",
        verticalAlign: "center"
    }
})