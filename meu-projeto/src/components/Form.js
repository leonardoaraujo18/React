import { useState } from "react";

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        alert(`O usuário ${name} cadastrou a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input id="name" name="name" type="text" placeholder="Digite o seu nome"
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" placeholder="Digite sua senha" id="password" name="password"
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;