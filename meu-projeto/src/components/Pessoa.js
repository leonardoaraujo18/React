import styles from './Pessoa.module.css'

function Pessoa({foto, nome, idade, profissao}){
    return(
        <div className={styles.conteudo}>
        <img src={foto} alt="Foto do usuário" />
        <h3>Nome: {nome}</h3>
        <h3>Idade: {idade}</h3>
        <h3>Profissão: {profissao}</h3>
        </div>
    )
}

export default Pessoa