import { FormTaskStyle } from "./FormTaskStyle"
import { Text, View } from "react-native"

export const FormTask = () => {
    return (
        <View style={FormTaskStyle.frmCadTask} >
            <Text style={FormTaskStyle.frmCadTitle}>Cadastro de task</Text>
        </View >
    )
}
