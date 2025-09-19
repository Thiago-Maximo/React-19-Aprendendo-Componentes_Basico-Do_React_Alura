
import './App.css'

function CampoDeFormulario({children}){
  return(
    <fieldset>
      {children}
    </fieldset>
  )
}

function Label(props){
  return(
    <label htmlFor={props.htmlFor}>
      {props.children}
    </label>
  )
}

function TituloFormulario(props){
  return(
   <h2>{props.children}</h2>
  )
}

function CampoDeEntrada(props){
  return(
    <input {...props}></input>
  )
}

function FormulariodeEvento(){
  return(
    <form className='form-evento'>
      <TituloFormulario>
        Preencha para Criar um Evento
      </TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor='nome'>Qual é o nome do Evento ?</Label>
        <CampoDeEntrada 
          type="text" 
          id='nome' 
          placeholder='Ex: Summer Dev Hits'
        />
      </CampoDeFormulario>
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
