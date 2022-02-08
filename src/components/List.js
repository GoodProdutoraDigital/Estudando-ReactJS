import Item from './Item'

//React Fragments (Uso de componente sem elemento pai)

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1985}/>
                <Item marca='Fiat' ano_lancamento={1964}/>
                <Item marca='Pegeout' ano_lancamento={1990}/>
                <Item marca='Renaut' ano_lancamento={1970}/>
                <Item/>
            </ul>
        </>
    )
}
export default List

/* valor string passar entre aspas e valores numericos dentro de chaves */