import Frase from "./Frase"

function HelloWord(){
    return (
        //wrapper
        <div>
            <h1>Meu Primeiro Componente</h1>
            <Frase/>
        </div>
    )
}
export default HelloWord