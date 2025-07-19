import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Olá, Mundo! Me livrei da maldição</p>
        </div>
    )
}

export default Frase;