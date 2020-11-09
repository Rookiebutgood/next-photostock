import {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

export default function Header() {
  let [isHeaderExtend, setHeaderExtend] = useState(true);
  let [showHistory, setShowHistory] = useState(false);
  let [searchHistory, setSearchHistory] = useState([]);

  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 450) {
        setHeaderExtend(false)
      } else {
        setHeaderExtend(true)
      }
    })
  }, [])

  let searchValues = () => {
    let arr = []
    searchHistory.forEach((el, i)=>arr.push(<span key={i}>{el}</span>))
    return arr
  }


  return(
    <header className={ isHeaderExtend ? `${styles.header} ${styles.header_expand}`: styles.header}>
      <div className={styles.topBar}>
        <Link href="/">
          <div className={styles.topBar__logo}>
            <img src="/unsplash.svg" alt="logo"/>
            Photostock
          </div>
        </Link>
        <div className={styles.topBar__buttons}>
          {!isHeaderExtend && 
            <button 
            className={styles.topBar__button}
            onClick={
              ()=>{
                setHeaderExtend(prev=>!prev)
                setShowHistory(false)
              }
            }
            >
              <img className={styles.topBar__buttonIcon} src="/search.svg" alt="logo"/>
              Поиск
            </button>
          }
          <Link href="/favorites">
            <button className={styles.topBar__button}>
              <img className={styles.topBar__buttonIcon} src="/favorite.svg" alt="logo"/>
              Избранное
            </button>
          </Link>
          <button 
            className={styles.topBar__button}
            onClick={
              ()=>{
                setHeaderExtend(true)
                setShowHistory(prev=>!prev)
              }
            }
          >
            <img className={styles.topBar__buttonIcon} src="/history.svg" alt="logo"/>
            История поиска
          </button>
        </div>
      </div>
      {!showHistory &&
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
          <div className="topbar__tags">
            <span>tag1</span>
            <span>tag2</span>
            <span>tag3</span>
            <span>tag4</span>
            <span>tag5</span>
          </div>
        </div>
      }
      {showHistory &&
        <div className={styles.topBar__searchHistory}>
          <h2>Ваши запросы</h2>
          {searchValues()}
        </div>
      }
    </header>
  )
}