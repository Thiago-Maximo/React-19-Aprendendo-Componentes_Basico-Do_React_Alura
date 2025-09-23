import './label.css'

export function Label(props){
  return(
    <label htmlFor={props.htmlFor} className='label'>
      {props.children}
    </label>
  )
}