import { useState } from "react"

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        alert(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }

    const[name, setName] = useState()
    const[password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" placeholder="Digite o seu nome" 
                    id="name" name="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" placeholder="Digite a sua Senha" id="password" name="password:" 
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form