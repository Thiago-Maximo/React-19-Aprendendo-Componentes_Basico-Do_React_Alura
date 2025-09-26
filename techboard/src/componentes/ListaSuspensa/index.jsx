import './lista.css'

export function ListaSuspensa({ id, name, itens }) {
  return (
    <select id={id} name={name} defaultValue="" className="lista-suspensa-form">
      <option value="" disabled>
        Selecione Uma Opção
      </option>
      {itens.map(function (item) {
        return (
          <option key={item.id} value={item.id}>
            {item.nome}
          </option>
        )
      })}
    </select>
  )
}
