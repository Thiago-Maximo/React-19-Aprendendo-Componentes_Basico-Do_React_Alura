
import './App.css'
import { Banner } from './componentes/Banner'
import { CardEvento } from './componentes/CardEvento'
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

  const eventos =[
    {
      capa: './public/imagens/imagem front end.png',
      tema: temas[0],
      data: new Date(),
      Titulo: 'Mulheres No Front'
    }
  ]

  return (
    <main>
      <header>
        <img src='/imagens/logo.png'></img>
      </header>

      <Banner></Banner>

      <FormulariodeEvento></FormulariodeEvento>
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item}></Tema>
            <CardEvento evento={eventos[0]}></CardEvento>
          </section>
        )
      })}
    </main>
  )
}

export default App
