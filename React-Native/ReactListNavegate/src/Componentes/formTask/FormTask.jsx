import { Alert, TextInput, TouchableOpacity } from "react-native"
import { FormTaskStyle } from "./FormTaskStyle"
import { Text, View } from "react-native"
import { useContext, useState } from "react"
import { TaskContext } from "../../Context/TaskContext"

export const FormTask = () => {

    const { postTask, getTask, taskValue, setTaskValue, editMode, setEditMode, putTask, setIdToEdit, idToEdit } = useContext(TaskContext)


    const saveTask = () => {
        console.log(`Texto Digitado ${taskValue}`)

        postTask(taskValue)
    };

    return (

        <View style={FormTaskStyle.frmTaskBox}  >
            <TextInput
                style={FormTaskStyle.faskInputName}
                placeholder="Adicione uma tarefa"
                value={taskValue}
                onChangeText={(textoDigitado) => {
                    setTaskValue(textoDigitado)
                }}
            />
            <TouchableOpacity style={FormTaskStyle.taskButton}
                onPress={() => {
                    if (editMode)
                        putTask()
                    else
                        saveTask()
                }
                }
            >
                <Text style={FormTaskStyle.taskButtonText}  > Salvar </Text>
            </TouchableOpacity>
            {
                editMode && (
                    <TouchableOpacity style={FormTaskStyle.taskButton}
                        onPress={() => {
                            setEditMode(false)
                            setTaskValue("")
                            setIdToEdit(0)
                        }}
                    >
                        <Text style={FormTaskStyle.taskButtonText}  > Calcelar </Text>
                    </TouchableOpacity>
                )
            }

        </View >
    )
}
