import { useEffect, useState } from 'react';
import styles from '../styles/ImageList.module.scss';
import Image from './Image';
const PUBLIC_KEY = process.env.PUBLIC_KEY;

export default function ImageList() {
  let [outputType, setOutputType] = useState(true)
  let [images, setImages] = useState([])
  useEffect(()=>{
    fetch('https://api.unsplash.com/photos/random?count=10&client_id='+PUBLIC_KEY,{method:'GET'})
    .then(res=>res.json())
    .then(res=>setImages(prev=>{
      let imageArr = []
      res.forEach((element, index) => {
        imageArr.push(<Image img={element} className={styles.imageList__image} key={index} />)
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