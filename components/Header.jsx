import {useState} from 'react'

export default function Header() {
  let [num, setNum] = useState(123)
  return(
    <header>
      {num}
    </header>
  )
}