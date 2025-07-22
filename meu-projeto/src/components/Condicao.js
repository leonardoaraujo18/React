import { useState } from "react";

function Condicao(){

    const [nome, setNome] = useState()

    function enviar(e){
        e.preventDefault();
    }

    function limpar(){
        setNome('')
    }

    return(
        <div>
            <h2>Meus dados:</h2>
            <form>
                <input type="text" placeholder="Digite seu nome aqui"
                onChange={(e) => setNome(e.target.value)} />
                <input onClick={enviar} type="submit" value="Enviar!" />
                {nome &&(
                    <div>
                        <p>O nome cadastrado foi: <strong>{nome}</strong></p>

                        <button onClick={limpar}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicao;