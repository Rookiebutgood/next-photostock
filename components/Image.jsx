import Link from 'next/link'
import styles from '../styles/Image.module.scss'

export default function Image({img}) {
  return (
    <div className={styles.image}>
      <img src={img.urls.regular} className={styles.image__bg} />
      <div className={styles.image__overlay}>
        <div className={styles.image__author}>
          <img className={styles.image__authorImg} src={img.user.profile_image.small} alt=""/>
          <span className={styles.image__authorName}>{`${img.user.first_name} ${img.user.last_name}`}</span>
          <span className={styles.image__authorLink}>{`@${img.user.username}`}</span>
        </div>
        <div className={styles.image__buttons}>
          <button className={styles.image__button} onClick={()=>console.log(img)}>
            <img src="./favorite.svg" alt=""/>
          </button>
          <Link href={`/photo_page/${img.id}`}>
            <button className={styles.image__button}>
              <img src="./resize.svg" alt=""/>
            </button>
          </Link>
          <button className={styles.image__button}>
            <img src="./download.svg" alt=""/>
          </button>
        </div>
      </div>
    </div>
  )
}