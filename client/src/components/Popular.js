import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from "react-router-dom";
import {MdFavoriteBorder, MdFavorite} from "react-icons/md"

function Popular() {
  const [popular, setPopular] = useState([]); //function allow to modify the variable
  const [favorties, setFavorites] = useState([])
  const  getPopular = async ()=>{

    const check = localStorage.getItem('popular');
    // const check = 0
    if(check){
      setPopular(JSON.parse(check))
    }else{      
      const count = 20;
      const key = '77c68ef76bc74460a33a631b601f508c';
      // const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=${count}`);
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=${count}`);
      const data = await api.json();  
      localStorage.setItem('popular',JSON.stringify(data.recipes))
      setPopular(data.recipes)
      console.log(data.recipes); 
    }
  }
  useEffect(()=>{
   getPopular();
  },[])
  console.log('populate',popular);

 const toggleFavorite = (id)=>{
  
  if(favorties.includes(id)){
    setFavorites(favorties.filter(f=> f !== id));
    localStorage.removeItem("favorties",favorties[id])
  }else{
    localStorage.setItem("favorties",[...favorties,id])
    setFavorites([...favorties,id])
  }
 } 
  return (
    <div>
        <Wrapper>
          <h3>Popular Picks</h3>
          <Splide options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: '3rem'
          }}>
          {popular.map((recipe)=>{
            return(
              <SplideSlide key={recipe.id}>
                <Card>
                <span onClick={()=>{toggleFavorite(recipe.id)}} className="fav">{favorties.includes(recipe.id) ? <MdFavorite/> : <MdFavoriteBorder/>}</span>
                  <Link to={'/recipe/'+recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}></img>
                  <Gradient/>
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
          </Splide>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  `
  const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  
  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%
    display: flex;
    justiy-content: center;
    align-items: center;
    margin-bottom: 2rem
  }

   .fav{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: left;
    font-weight: 600;
    font-size: 2rem;
    height: 40%
    display: flex;
    justify-content: flex-end;
    align-item: 0rem;
    margin-bottom: 22rem;
    margin-left: 1rem;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`
export default Popular