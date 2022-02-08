//Disparar evento ao realizar submit
function Form(){
    function cadastrarUsuario(event){
        event.preventDefault()
        console.log('Cadastrou novo Usuário')
    }

    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu Nome">
                    </input>
                </div>
                <div>
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        id="pass"
                        name="pass"
                        placeholder="Digite sua Senha">
                    </input>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Cadastrar">
                    </input>
                </div>
            </form>
        </div>
    )
}

export default Form