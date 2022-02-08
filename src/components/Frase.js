//Importando style's CSS
import styles from '../modules/Frase.module.css'

function Frase(){
    return(
        <div className={styles.frase_Container}>
            <p className={styles.fraseContent}>Amante da Arte e Tecnologia !</p>
        </div>
    )
}
export default Frase