
import { useState } from 'react'
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

  const [eventos, setEventos] = useState([
    {
      capa: '/imagens/imagem front end.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres No Front'
    }
  ])

  function adicionarEvento(evento) {
    //console.log('Eventos =>', eventos)
    setEventos([...eventos, evento])
  }

  return (
    <main>
      <header>
        <img src='/imagens/logo.png'></img>
      </header>

      <Banner></Banner>

      <FormulariodeEvento temas={temas} aoSubmeter={adicionarEvento}></FormulariodeEvento>
      <section className='container'>
        {temas.map(function (item) {
          if (!eventos.some(function (evento){
            return evento.tema.id == item.id
          })){
            return null
          }
          return (
            <section key={item.id}>
              <Tema tema={item}></Tema>
              <div className='eventos'>
                {eventos.filter(function(evento){
                  return evento.tema.id == item.id
                })
                .map(function (item, index) {
                  return <CardEvento evento={item} key={index}></CardEvento>
                })}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}

export default App
