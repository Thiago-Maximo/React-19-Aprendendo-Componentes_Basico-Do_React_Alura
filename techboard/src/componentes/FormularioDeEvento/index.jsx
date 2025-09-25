import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampodeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";
import './formulario.css'


export function FormulariodeEvento({temas}) {
  return (
    <form className='form-evento'>
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
          <Label htmlFor='dataEvento'>Qual é a Data do Evento ?</Label>
          <CampoDeEntrada
            type="date"
            id='dataEvento'
            name='dataEvento'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor='dataEvento'>Qual é o Tema do Evento ?</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas}></ListaSuspensa>
        </CampoDeFormulario>

        <div className="acoes">
          <Botao texto='Criar Evento'></Botao>
        </div>
      </div>

    </form>
  )
}