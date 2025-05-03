
import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [cat, setCat] = useState(0)
  const {id, type, origin, temperament, lifespan, image, description} = data[cat] 
  
  const previouSlide = () =>{
    setCat(cat =>{
      cat --;
      if (cat<0){
        return data.length-1
      }
      return cat
    })
  }


  const nextSlide = () => {
    setCat(cat =>{
      cat ++
      if (cat > data.length-1){
        cat=0}
      return cat;
    }
    )
  }

  return (
    <div className='header'>
      
    <div key={id} className='container'>
      <div >
        <img src={image} alt='cat' width="350px"></img>
      </div>
      <div className='desc'>
        <h1>{type}</h1>
        <h2> From : {origin}</h2>
        <h3>Temperament - {temperament}</h3>
        <h3>Lifespan: {lifespan}</h3>
        <h3>Description: {description}</h3>
      </div>      
    </div>
    <div >
      <button onClick={previouSlide}>Previous</button>
      <button onClick={() => nextSlide()}>Next</button>
    </div>
    </div>
  );
}

export default App;
