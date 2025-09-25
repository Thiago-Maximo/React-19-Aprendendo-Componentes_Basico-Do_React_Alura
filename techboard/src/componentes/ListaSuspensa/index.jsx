import './lista.css'

 export function ListaSuspensa({itens}) {
    return (
        <>
            <select className='lista-suspensa-form' defaultValue="">
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