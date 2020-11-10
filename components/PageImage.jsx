import styles from '../styles/PageImage.module.scss'

export default function PageImage({img}) {
  console.log('for regular', img)
  const {user, urls, links, width, height, tags} = img || null
  const ratio = width / height
  const bgStyle = {background: `url(${urls.regular}) no-repeat center center`, backgroundSize: 'cover'}
  console.log(img)
  const tagButtons = ()=> {
    let t = []
    tags.forEach((el, i) => {
      t.push(<button key={i}>{el.title}</button>)
    });
    return t;
  }
  return(
    <div className={styles.pageImage}>
      <div className={styles.pageImage__bg} style={bgStyle}></div>
      <div className={styles.pageImage__buttons}>
        <div className={styles.pageImage__author}>
          <img className={styles.pageImage__authorImg} src={user.profile_image.small} alt=""/>
          <div className={styles.pageImage__authorInfo}>
            <span className={styles.pageImage__authorName}>{`${user.first_name} ${user.last_name}`}</span>
            <br />
            <span className={styles.pageImage__authorLink}>{`@${user.username}`}</span>
          </div>
        </div>
        <div>
          <button>Like</button>
          <button>Download</button>
        </div>
      </div>
      <img
        src={urls.regular} alt=""
        className={`${styles.pageImage__image} ${ratio > 1 ? styles.pageImage__image_h : styles.pageImage__image_v}`}
      />
      <div className={styles.pageImage__tags}>
        <h3>Похожие теги</h3>
        {tagButtons()}
      </div>
    </div>
  )  
}