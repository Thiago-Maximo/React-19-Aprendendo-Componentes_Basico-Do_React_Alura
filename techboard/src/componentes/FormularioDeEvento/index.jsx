import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampodeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";
import './formulario.css'




export function FormulariodeEvento({ temas }) {

  function aoFormSubmetido(form) {
    form.preventDefault(); // evita recarregar a página
    const formData = new FormData(form.target);

    const evento = {
      capa: formData.get('capa'), // ou 'arquivo', se você não mudar o name
      tema: temas.find(item => item.id === Number(formData.get('tema'))),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }

    console.log("Esse é o evento", evento)
  }



  return (
    <form className='form-evento' onSubmit={aoFormSubmetido}>
      <TituloFormulario>
        Preencha para Criar um Evento
      </TituloFormulario>
      <div className=" campos">
        <CampoDeFormulario>
          <Label htmlFor='nome'>Qual é o nome do Evento ?</Label>
          <CampoDeEntrada
            type="text"
            id='nome'
            placeholder='Ex: Summer Dev Hits'
            name='nomeEvento'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor='capa'>Qual é a imagem do Evento ?</Label>
          <CampoDeEntrada
            type="text"
            id='capa'
            name='capa'
            placeholder='http://'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor='dataEvento'>Qual é a Data do Evento ?</Label>
          <CampoDeEntrada
            type="date"
            id='dataEvento'
            name='dataEvento'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor='tema'>Qual é o Tema do Evento ?</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas}></ListaSuspensa>
        </CampoDeFormulario>

        <div className="acoes">
          <Botao texto='Criar Evento'></Botao>
        </div>
      </div>

    </form>
  )
}