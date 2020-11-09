import { useEffect, useState } from 'react'
import styles from '../styles/ImageList.module.scss'
import Image from './Image'

export default function ImageList() {
  let [outputType, setOutputType] = useState(true)
  let [images, setImages] = useState([])
  useEffect(()=>{
    fetch('https://picsum.photos/v2/list?page=2&limit=20')
    .then(res=>res.json())
    .then(res=>setImages(prev=>{
      let imageArr = []
      res.forEach((element, index) => {
        imageArr.push(<Image src={element.download_url} className={styles.imageList__image} key={index} />)
      });
      return [...prev, imageArr]}))
  }, [])
  return(
    <div className={styles.imageList}>
      <div>outputtupes</div>
      <div className={styles.imageList__images}>
      {images}
      </div>
    </div>
  )
}