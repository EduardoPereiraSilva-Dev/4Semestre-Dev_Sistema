import { ScrollView, Text, View } from "react-native"
import { TaskItem } from "../taskitem/TaskItem"
import { useContext, useEffect, useState } from "react"
import { TaskListStyles } from "./TaskListStyle"
import { TaskContext } from "../../Context/TaskContext"

export const TaskList = () => {
    const { listagemTarefas, getTask } = useContext(TaskContext)

    useEffect(() => {
        getTask();
    }, [])

    return (
        <ScrollView style={TaskListStyles.TaskListContainer}>
            {
                listagemTarefas.map((tarefa) => {
                    return (
                        <TaskItem id={tarefa.id} key={tarefa.id} descricao={tarefa.descricao} />
                    )
                })
            }


        </ScrollView >
    )
}