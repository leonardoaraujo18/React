import MyName from "./MyName";

function HelloWorld(){
    return(
        <div>
            <h1>Meu primeiro componente!</h1>
            <MyName name="Leonardo" />
            <MyName name="Roberto" />
        </div>
    )
}

export default HelloWorld;