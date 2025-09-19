
import './App.css'

function TituloFormulario(props){
  return(
   <h2>{props.children}</h2>
  )
}


function FormulariodeEvento(){
  return(
    <form className='form-evento'>
      <TituloFormulario>
        Preencha para Criar um Evento
      </TituloFormulario>
      <fieldset>
        <label htmlFor='nome'>Qual é o nome do Evento ?</label>
        <input type="text" id='nome' placeholder='Ex: Summer Dev Hits'/>
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
