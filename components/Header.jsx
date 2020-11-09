import {useEffect, useState} from 'react';
import styles from '../styles/Header.module.scss';

export default function Header() {
  let [isSearchOpen, setOpenSearch] = useState(true)
    
  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 100) {
        setOpenSearch(false)
      } else {
        setOpenSearch(true)
      }
    })
  }, [])


  return(
    <header className={ isSearchOpen ? `${styles.header} ${styles.header_expand}`: styles.header}>
      <div className={ isSearchOpen ? `${styles.topBar} ${styles.topBar_expand}`: styles.topBar}>
        <div className={styles.topBar__logo}>Photostock</div>
        <div className={styles.topBar__buttons}>
          <button className={styles.topBar__button, styles.topBar__button_search}>Поиск</button>
          <button className={styles.topBar__button, styles.topBar__button_favorite}>Избранное</button>
          <button 
            className={styles.topBar__button, styles.topBar__button_history}
            onClick={()=>setOpenSearch(prev=>!prev)}
          >
            История поиска
          </button>
        </div>
      </div>
      <div className={styles.topBar__inputWrp}>
        <input className={styles.topBar__input} type="text" placeholder="Поиск"/>
      </div>
      <div className="topbar__tags">
        <span>tag1</span>
        <span>tag2</span>
        <span>tag3</span>
        <span>tag4</span>
        <span>tag5</span>
      </div>
    </header>
  )
}