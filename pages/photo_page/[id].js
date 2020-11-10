import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PageImage from '../../components/PageImage'
import ImageList from '../../components/ImageList'

function PhotoPage() {
  const router = useRouter();
  const PUBLIC_KEY = process.env.PUBLIC_KEY;

  let [image, setImage] = useState(null);
  let [sameImages, setSameImages] = useState([])

  useEffect(()=>{
    if(router.query.id) {
      fetch(`https://api.unsplash.com/photos/${router.query.id}?client_id=${PUBLIC_KEY}`,{method:'GET'})
      .then(res=>res.json())
      .then(res=>{
        setImage(res)   
      })
    }
  }, [router])
  // useEffect(()=> {
  //   try {
  //     fetch(`https://api.unsplash.com/search/photos?page=1&query=${image.tags[0].title}&client_id=${PUBLIC_KEY}`,{method:'GET'})
  //     .then(res=>res.json())
  //     .then(res=>setSameImages(res))
  //   } catch (e){
  //     console.log('catch', e)
  //     setSameImages(null)
  //   }
  // }, [image])
  return (<div>
    { image && <PageImage img={image} /> }
    { image && <ImageList imagesProp={sameImages} /> }
  </div>)
}

export default PhotoPage