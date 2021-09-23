import HeadMeta from "../components/HeadMeta"
import styles from '../styles/Favourites.module.css'

const favourites = () => {
    return (
        <>
        <HeadMeta title="Favourites" />
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Favourites</h1>
                <p>A list of your favourite pokemon</p>
            </div>
        </div>
        </>
    )
}

export default favourites
