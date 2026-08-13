import { StyleSheet } from "react-native";

export const TaskItemStyles = StyleSheet.create({
    cardBox: {
        width: "100%",
        marginBottom: 15,
        height: 70,
        padding: 15,
        borderRadius: 5,
        backgroundColor: "#31364d",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardText: {
        color: "#fff",
        fontSize: 16
    },
    cardButton: {
        width: 45,
        height: 45,
        marginLeft: 10,
        justifyContent: "center ",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#fff",
        borderRadius: 5
    },
    cardButtonEditColor: {
        borderColor: "#9abaee"
    },
    cardButtontrashColor: {

        borderColor: "#b75d63"
    },
    cardButtonImage: {
        justifyContent: "center",
        // flexDirection: "row"
    },
    cardImage: {
        width: 100,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    }
})