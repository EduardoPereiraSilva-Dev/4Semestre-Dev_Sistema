import editIcon from './assets/editar.svg'
import trashIcon from './assets/lixeira.svg'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {

  const [tasklist, setTasklist] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [idToEdit, setIdToEdit] = useState(0);

  // CRUD

  const getTask = async () => {

    try {
      const APIReturn = await axios.get("http://localhost:3000/taskpoin")
      const bodyAPI = await APIReturn.data
      setTasklist(bodyAPI)

    } catch (error) {
      alert("vixi, deu erro amigo(a)");
    }
  }
  const createTak = async (e) => {

    e.preventDefault();
    if (taskValue.trim().length == 0) {
      alert("escreve alguma coisa aí né meu amor")
      return false
    }
    try {
      const objCadastro = {
        decricao: taskValue,
      };

      const APIReturn = await axios.post("http://localhost:3000/taskpoin", objCadastro)

      getTask()
    }
    catch (erro) {
      alert("vixi, deu erro amigo(a)");
      return false
    }
    alert("e é clarinho que vai gerar")
  }
  const deleteTask = async (task) => {
    const querApagar = confirm(`Quer mesmo apagar migo(a)'${task.decricao}'`)

    if (!querApagar) return false

    try {
      const APIReturn = await axios.delete(`http://localhost:3000/taskpoin/${task.id}`)

      getTask()
    }
    catch (erro) {
      alert("vixi, deu erro amigo(a)");

    }
  }
  const putTask = (task) => {
    try {
      setTaskValue(task.decricao)
      setEditMode(true)
      setIdToEdit(task.id)


    }
    catch (erro) {
      alert("e é clarinho que deu erro né momo")
    }
  }

  const confirmPutTask = async () => {

    if (taskValue.trim().length == 0) {
      alert("escreve alguma coisa aí né meu amor")
      return false
    }
    try {
      axios.put(`http://localhost:3000/taskpoin/${idToEdit}`, { decricao: taskValue })
      getTask()
      setEditMode(false);
      setIdToEdit(0)
      setTaskValue("")

      alert("ta mudada né querido(a)")
    }
    catch (erro) {
      alert("e é clarinho que deu erro né momo")
    }
  }


  useEffect(() => {
    getTask()
  }, [])
  return (
    <>
      <header className='header-section'>
        <h1 className='header-section__title'>React List </h1>
      </header>

      <main className='body-section'>
        <form className='card-task' onSubmit={editMode ? confirmPutTask : createTak}>
          <input type="text" className='card-task__entry' placeholder='adicione uma tarefa' value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)} />
          <button className='card-task__btn-confirm'>Adicionar</button>
          {
            editMode && (
              <button className='card-task__btn-confirm' type='button' onClick={() => {
                setEditMode(false);
                setIdToEdit(0)
                setTaskValue("")
              }}>Cancelar</button>
            )
          }
          <p>Status: {taskValue}</p>
          <p> id para Editar: {idToEdit}</p>
        </form>
        <section className='cardlist'>
          {tasklist.map(task => {
            return (
              <article className='cardtask' key={task.id}>
                <p className='cardtask__task-text'>{task.decricao}</p>
                <div className='cardlist__icon-box'>
                  <div className="cardlist__icon" onClick={() => { putTask(task) }}>
                    <img src={editIcon} alt="imagem" />
                  </div>
                  <div className="cardlist__icon" onClick={() => deleteTask(task)}>
                    <img src={trashIcon} alt="imagem" />
                  </div>
                </div>
              </article>
            )
          })}

        </section>
      </main>

      <footer className='footer-section'>
        <p className='footer-section__right-text'>2026 React List - Todos os direitos reservados</p>
      </footer>
    </>
  )
}

export default App
