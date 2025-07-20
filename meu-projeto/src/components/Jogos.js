import styles from './Jogos.module.css'

function Jogos({nome, tempo, patente}){
    return(
        <div className={styles.caixa}>
            <ul className={styles.lista}>
                <li>Nome do jogo: {nome}</li>
                <li>Tempo de jogo: {tempo}</li>
                <li>Patente atual: {patente}</li>
            </ul>
        </div>
    )
}

export default Jogos;