import Button from "./evento/Button";

function Evento({numero}){

    function meuEvento(){
        alert("Primeiro Evento ativado!")
    }

    function segundoEvento(){
        alert("Segundo Evento ativado!")
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default  Evento;