import { useState } from 'react'
import { BiSolidQuoteAltLeft,BiSolidQuoteAltRight } from "react-icons/bi";
import phrases from './phrases.json'
import { bg1,bg2, bg3,bg4, bg5,bg6 } from './images'
import './App.css'

const images= [bg1,bg2, bg3,bg4, bg5, bg6]

function getRamdomIndex(arr){
    return Math.floor(Math.random() * arr.length)

}

function App(){
  const [phrase, setPhrase] = useState(phrases[getRamdomIndex(phrases)].phrase)
  const [bgRandom, setBgRandom] = useState(images[getRamdomIndex(images)])
    
  const handleClick = () => {
    setPhrase(phrases[getRamdomIndex(phrases)].phrase)
    setBgRandom(images[getRamdomIndex(images)])}
   
  const bgStyle =  `url('${bgRandom}')`

  return(
    <div className='packing' style={{backgroundImage: bgStyle}}>
        <div className='container'>
        <h1 className='title'>Galleta de la Fortuna</h1>
         <blockquote className='file'>
          <div className='file_body'>
           <p className='file__phrase'><BiSolidQuoteAltLeft className='file__quote'/>
             {'  '} {phrase} {'  '}
             <BiSolidQuoteAltRight className='file__quote' /></p>
          </div>
         </blockquote>
        <button className='btn' onClick={handleClick}>
            Abrir Otra Galleta
        </button>
        </div>
    </div>
 )   
}
export default App
