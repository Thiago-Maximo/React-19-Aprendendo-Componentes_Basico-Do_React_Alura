import { CampoDeEntrada } from "../CampodeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import './formulario.css'


 export function FormulariodeEvento(){
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