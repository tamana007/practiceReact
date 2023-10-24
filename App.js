import logo from './logo.svg';
import './App.css';
import {useState,useRef,useEffect}from 'react';

function App() {
  
  const [isClick,setIsclick]=useState(false);
  const[paragraph,setParagraph]=useState('Hello World');
  const paragraphRef=useRef(null)

  useEffect(()=>{

    // setIsclick
    if(isClick){
      const changeParagrah=paragraphRef.innerText='Dom element changed';
      setParagraph(changeParagrah);
    }
    else{
      setParagraph('Hello World')
    }
    

  },[isClick])
  return (
    <article style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <button type='btn'onClick={()=>{setIsclick(!isClick)}}>Toggle Me </button>
<p ref={paragraphRef}>{paragraph}</p>
</article>
  )
    






  
}

export default App;
