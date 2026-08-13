import { Alert, Image, Text, View } from "react-native"
import { TaskItemStyles } from "./TaskItemStyle"
import { TouchableOpacity } from "react-native"
import { useContext } from "react"
import { TaskContext } from "../../Context/TaskContext"

export const TaskItem = ({ id, descricao }) => {
    const { deleteTask, putTaskPreview } = useContext(TaskContext)

    const deleteTaskConfirm = (tarefa) => {

        Alert.alert("tem certeza quer apagar amigo(a)", `voce vai apagar o ${tarefa.descricao} `, [{ text: "não" }, { text: "sim", onPress: () => { deleteTask(id) } }])
    }

    return (
        <View style={TaskItemStyles.cardBox} >
            <Text style={TaskItemStyles.cardText}>{id} - {descricao} </Text>

            <View style={TaskItemStyles.cardImage}>

                <TouchableOpacity style={[TaskItemStyles.cardButton, TaskItemStyles.cardButtonEditColor]} onPress={() => { putTaskPreview({ id, descricao }) }}>

                    <Image source={require('../../../assets/lapis.png')}
                        style={TaskItemStyles.cardButtonImage}
                    />

                </TouchableOpacity>

                <TouchableOpacity style={[TaskItemStyles.cardButton, TaskItemStyles.cardButtontrashColor]} onPress={() => { deleteTaskConfirm({ id, descricao }) }}>

                    <Image
                        source={require('../../../assets/lixo.png')}
                        style={TaskItemStyles.cardButtonImage}
                    />

                </TouchableOpacity>
            </View>

        </View >
    )
}