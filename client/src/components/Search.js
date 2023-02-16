import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import FilterModal from './FilterModal';
import FilterListTwoToneIcon from '@mui/icons-material/FilterListTwoTone';

function Search() {
  const [input, setInput] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const url = window.location.pathname;
  const recipeUrl = url.includes("/recipe")

  //event handler
  const submitHandler = (e) =>{

   e.preventDefault();
    navigate('/searched/'+input)
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <div>
          <FaSearch>
          </FaSearch>
          <input onChange={(e)=> setInput(e.target.value)} type="text" value={input}/>
        </div>  
        {/* <div>        
          <Button varient="primary" className={`${url === '/' || recipeUrl ? 'hideout btn' : 'btn'}`} onClick={()=>setModalShow(true)}> 
           <FilterListTwoToneIcon className='icon' />
            <span className='fil'>
              Filters
            </span>
          </Button>
          <FilterModal show={modalShow} onHide={()=>setModalShow(false)}/>
        </div> */}
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 13rem;
    div{
      position: relative;
       width: 100%;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 2rem;
        outline: none;
        width: 100%;
        
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
    
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
      margin-left: 3.7rem;
    }
    
    .fil{
      padding-left: 1.2rem;
    }

    .hideout {
      display: none
    }
`

export default Search