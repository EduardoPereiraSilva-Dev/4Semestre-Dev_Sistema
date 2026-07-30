import editIcon from './assets/editar.svg'
import trashIcon from './assets/lixeira.svg'
import './App.css'
import { useState } from 'react'

function App() {

  const [tasklist, setTasklist] = useState([
    { decricao: "eduardo", id: 1 },
    { decricao: "eduarda", id: 2 },
    { decricao: "julia", id: 3 },
    { decricao: "Maria", id: 4 },
    { decricao: "xuxa", id: 5 }]);



  return (
    <>
      <header className='header-section'>
        <h1 className='header-section__title'>React List </h1>
      </header>

      <main className='body-section'>
        <form className='card-task'>
          <input type="text" className='card-task__entry' placeholder='adicione uma tarefa' />
          <button className='card-task__btn-confirm'>Adicionar</button>
        </form>
        <section className='cardlist'>
          {tasklist.map(task => {
            return (
              <article className='cardtask' key={task.id}>
                <p className='cardtask__task-text'>{task.decricao}</p>
                <div className='cardlist__icon-box'>
                  <div className="cardlist__icon">
                    <img src={editIcon} alt="imagem" />
                  </div>
                  <div className="cardlist__icon">
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
