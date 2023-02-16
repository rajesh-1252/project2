import React,{useState} from 'react'
import styled from "styled-components"
import Cuisine from './Cuisine'
import FilterModal from '../components/FilterModal';
import Button from 'react-bootstrap/Button';
import FilterListTwoToneIcon from '@mui/icons-material/FilterListTwoTone';

function Linker(props) {
    //Filter button
    const [modalShow, setModalShow] = useState(false);
    const url = window.location.pathname;
    const recipeUrl = url.includes("/recipe")
  return (
    <div>
        <Btn>        
        <Button varient="primary" className={`${url === '/' || recipeUrl ? 'hideout btn' : 'btn'}`} onClick={()=>setModalShow(true)}> 
        <FilterListTwoToneIcon className='icon' />
            <span className='fil'>
              Filters
            </span>
        </Button>
        <FilterModal show={modalShow} onHide={()=>setModalShow(false)}/>
        </Btn> 
        <Cuisine {...props}/> 
    </div>
    
  )
}

const Btn = styled.div`
    .btn{
      box-shadow: none !important;
      outline: none !important;
      border: none;
      margin: 1rem 0rem 1rem 5rem;
      border-radius: 5px;
      background: linear-gradient(35deg, #494949, #313131);
      display: fixed;
    }


    button:hover{
        background: linear-gradient(to right, #f27121, #e94057);
        
        svg{
            color: white;
        }

        h4{
            color: white
        }
    }

    .icon{
      margin-left: 1rem;
    }
    
    .fil{
      padding-left: 1.2rem;
    }

    .hideout {
      display: none
    }
`;

export default Linker