import styles from '../styles/Image.module.scss'

export default function Image({src}) {
  return (
    <div className={styles.image}>
      <img src={src} className={styles.image__bg} />
      <div className={styles.image__overlay}>
        <div className={styles.image__author}>author</div>
        <div className={styles.image__buttons}>
          <button className={styles.image__button}>
            <img src="./favorite.svg" alt=""/>
          </button>
          <button className={styles.image__button}>
            <img src="./favorite.svg" alt=""/>
          </button>
          <button className={styles.image__button}>
            <img src="./favorite.svg" alt=""/>
          </button>
        </div>
      </div>
    </div>
  )
}