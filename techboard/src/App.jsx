
import './App.css'
import { FormulariodeEvento } from './componentes/FormularioDeEvento'
import { Tema } from './componentes/Tema'


function App() {

  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligencia artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    }
  ]


  return (
     <main>
        <header>
          <img src='/imagens/logo.png'></img>
        </header>

        <section>
          <img src='/imagens/banner.png'></img>
        </section>

        <FormulariodeEvento></FormulariodeEvento>

        <section>
          <Tema tema={temas[0]}></Tema>
        </section>

        
        <section>
          <Tema tema={temas[1]}></Tema>
        </section>

        
        <section>
          <Tema tema={temas[2]}></Tema>
        </section>

        
        <section>
          <Tema tema={temas[3]}></Tema>
        </section>

        
        <section>
          <Tema tema={temas[4]}></Tema>
        </section>

        
        <section>
          <Tema tema={temas[5]}></Tema>
        </section>
     </main>
  )
}

export default App
