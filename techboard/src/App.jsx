
import './App.css'

function FormulariodeEvento(){
  return(
    <form className='form-evento'>
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor='nome'>Qual é o nome do Evento ?</label>
        <input type="text" id='nome'/>
      </fieldset>
    </form>
  )
}


function App() {

  return (
     <main>
        <header>
          <img src='/imagens/logo.png'></img>
        </header>

        <section>
          <img src='/imagens/banner.png'></img>
        </section>

        <FormulariodeEvento></FormulariodeEvento>
     </main>
  )
}

export default App
