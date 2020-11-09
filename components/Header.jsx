import {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

export default function Header() {
  let [isSearchOpen, setOpenSearch] = useState(true);
  let [searchHistory, setSearchHistory] = useState([]);
    
  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 450) {
        setOpenSearch(false)
      } else {
        setOpenSearch(true)
      }
    })
  }, [])


  return(
    <header className={ isSearchOpen ? `${styles.header} ${styles.header_expand}`: styles.header}>
      <div className={styles.topBar}>
        <Link href="/">
          <div className={styles.topBar__logo}>
            <img src="/unsplash.svg" alt="logo"/>
            Photostock
          </div>
        </Link>
        <div className={styles.topBar__buttons}>
          <button className={styles.topBar__button, styles.topBar__button_search}>Поиск</button>
          <Link href="/favorites">
            <button className={styles.topBar__button, styles.topBar__button_favorite}>Избранное</button>
          </Link>
          <button 
            className={styles.topBar__button, styles.topBar__button_history}
            onClick={()=>setOpenSearch(prev=>!prev)}
          >
            История поиска
          </button>
        </div>
      </div>
      <div className={styles.topBar__inputWrp}>
        <input
          type="text"
          className={styles.topBar__input}
          placeholder="Поиск"
          onKeyDown={e => {
            if(e.key === "Enter"){
              setSearchHistory(prev=>{return [...prev, e.target.value]})
              console.log(searchHistory)
            }
          }}
        />
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