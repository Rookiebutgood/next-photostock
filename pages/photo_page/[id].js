import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PageImage from '../../components/PageImage'

function PhotoPage() {
  const router = useRouter();
  const PUBLIC_KEY = process.env.PUBLIC_KEY;
  let [image, setImage] = useState(null)
  useEffect(()=>{
    fetch(`https://api.unsplash.com/photos/${router.query.id}?client_id=${PUBLIC_KEY}`,{method:'GET'})
    .then(res=>res.json())
    .then(res=>setImage(res))
  }, [])

  return (<div style={{marginTop: '80px'}}>
    {image && <PageImage img={image} />}
  </div>)
}

export default PhotoPage