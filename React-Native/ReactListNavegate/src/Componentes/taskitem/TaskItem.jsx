import { Text, View } from "react-native"
import { TaskItemStyles } from "./TaskItemStyle"

export const TaskItem = () => {
    return (
        <View style={TaskItemStyles.cardBox}>
            <Text style={TaskItemStyles.}>React List</Text>
        </View >
    )
}