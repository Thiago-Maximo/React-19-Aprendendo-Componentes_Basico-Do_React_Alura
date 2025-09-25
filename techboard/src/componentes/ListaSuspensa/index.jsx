import './lista.css'

 export function ListaSuspensa({itens}) {
    return (
        <>
            <select   defaultValue="" className="lista-suspensa-form">
                <option value="" disabled>
                    Selecione Uma Opção
                </option>
                {itens.map(function (item) {
                    return <option key={item.id} value={item.id}>
                        {item.nome}
                    </option>
                })}
            </select>
        </>
    )
}