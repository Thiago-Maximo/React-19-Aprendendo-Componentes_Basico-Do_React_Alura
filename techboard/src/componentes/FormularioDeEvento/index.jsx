import { CampoDeEntrada } from "../CampodeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import './formulario.css'


export function FormulariodeEvento() {
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
      </div>

    </form>
  )
}