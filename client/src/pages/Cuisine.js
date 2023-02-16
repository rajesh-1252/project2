import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components"
import {motion} from "framer-motion";
import {Link, useParams} from "react-router-dom"
import {MdFavoriteBorder, MdFavorite} from "react-icons/md"
import Pagination from '../components/Pagination';
import {AppContext}  from '../components/FilterModal';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const [favorties, setFavorites] = useState([]);
    
    let params = useParams();
    const getCuisine = async(name)=>{
        const check = localStorage.getItem('cuisine');
        if(check){
            setCuisine(JSON.parse(check))
        }else{
            try {             
                const key = '77c68ef76bc74460a33a631b601f508c';
                //#TODO: filters
                const setVegie = `&tags=vegetarian` || " ";
                const count = 12
                const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=${name}&number=${count}${setVegie}`);
                const recipes = await data.json();
                localStorage.setItem('cuisine',JSON.stringify(recipes.results)) //-  store in localstorage
                setCuisine(recipes.results) 
            } catch (error) {
                console.log('Cuisine-error',error);
            }
        }
    };

 const toggleFavorite = (id)=>{
  if(favorties.includes(id)){
    localStorage.removeItem("favorties",favorties[id])
    setFavorites(favorties.filter(f=> f !== id));
  }else{
    localStorage.setItem("favorties",[...favorties,id])
    setFavorites([...favorties,id])
  }
 } 
    useEffect(()=>{
        getCuisine(params.type)
    },[params.type])
  return (
    <Grid
        animate={{opacity: 1}}
        initial ={{opacity: 0}}
        exit = {{opacity: 0}}
        transition={{duration: 0.5}}
    >
        {cuisine.map((item)=>{
            return(
                <Card key={item.id}>
                    <span onClick={()=>{toggleFavorite(item.id)}} className="fav">{favorties.includes(item.id) ? <MdFavorite/> : <MdFavoriteBorder/>}</span>
                    <Link to={"/recipe/"+item.id}>
                    {/* <span className="fav"><MdFavoriteBorder/></span> */}
                    <img src={item.image} alt=""/> 
                    <h4>{item.title}</h4>
                    <p>hi:test</p>
                    </Link>
                </Card>
            );
        })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;

    }
    a{
        text-decoration: none;
    }
    svg{
        font-size: 2rem;
        margin-left: 1rem;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }

    .fav{
    position: absolute;
    z-index: 10;
    color: white;
    font-size: 2rem;
    }

    .fav:hover{
        color: red;
    }
  }
`;
export default Cuisine