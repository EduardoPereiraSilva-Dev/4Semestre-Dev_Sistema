import { createContext, useState } from "react";
import axios from "axios"
import { Alert } from "react-native";
import api from "../Componentes/services/FakeAPIService"

export const TaskContext = createContext()
export const TaskProvider = ({ children }) => {
    const [listagemTarefas, setListagemTarefas] = useState([]);
    const [taskValue, setTaskValue] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [idToEdit, setIdToEdit] = useState(0);

    const getTask = async () => {
        try {
            const APIReturn = await api.get("/taskPoint")
            const APIData = await APIReturn.data

            setListagemTarefas(APIData)

        }
        catch (error) {
            console.log("Deu ruim ai bixa");
            console.log(error)
        }
    }

    const postTask = async (taskValue) => {

        await api.post("/taskPoint", { descricao: taskValue })
        await getTask()
        setTaskValue("")

    }

    const putTaskPreview = async (tarefa) => {

        setTaskValue(tarefa.descricao)
        setEditMode(true)
        setIdToEdit(tarefa.id)
    }
    const putTask = async (tarefa) => {
        try {
            await api.put(`/taskPoint/${idToEdit}`, { descricao: taskValue });
            await getTask()
            setIdToEdit(0)
            setEditMode(false)
            setTaskValue("")

        } catch (error) {
            console.log("deu ruim viu bixo")
            console.log(error)
        }
    }

    const deleteTask = async (id) => {

        try {
            await api.delete(`/taskPoint/${id}`)
            await getTask()

        }
        catch (error) {

            Alert.alert("deu ruim ai amigo(a)", `${error}`)
            console.log(error)
        }
    }

    return (
        <TaskContext.Provider value={{ listagemTarefas, setListagemTarefas, getTask, postTask, deleteTask, putTask, taskValue, setTaskValue, putTaskPreview, setEditMode, idToEdit, setIdToEdit, editMode }}>
            {children}
        </TaskContext.Provider >
    )
}