import React, { useEffect, createContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Slider from '@mui/material/Slider'
import {useState} from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import { useAppContext } from '../context/appContext';
import Cuisine from './Cuisine';
import Linker from './Linker';

export const AppContext = createContext();

function FilterModal(props) {
  const [isActive, setIsActive] = useState(false);
  const [isVeganActive, setVeganActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState([0]);
  const [sugarValue, setSugarValue] = useState([0]);
  const [proteinValue, setProteinValue] = useState([0]);

  // console.log('useApp',useAppContext);
  

  const handleChange = (event)=>{

    switch (event.target.name) {
      case 'isActive':
        console.log('veg');
        setIsActive(event.target.checked);
        break;
      case 'isVeganActive':
        console.log('vegan');
        setVeganActive(event.target.checked);
        break;
      default:
        break;
    }
  }

  
  const handleChangeValue = (event, value)=>{
    setSelectedValue(value);
  }
  
  const handleSugarValue = (event, value)=>{
    setSugarValue(value);
  }
  
  const handleProteinValue = (event, value)=>{
    setProteinValue(value)
  }
  const applyFilters = ()=>{
    //value Filters
    console.log('af',proteinValue)
  }
  const handleSubmit = (event, onFilter)=>{
    event.preventDefault();
    
    onFilter({isActive, isVeganActive, selectedValue, sugarValue, proteinValue})
  }

  useEffect(()=>{
    applyFilters(); 
  },[isActive, isVeganActive, selectedValue, sugarValue, proteinValue])
  
  return (
    <div>
    {/* <AppContext.Provider value={[isActive, isVeganActive, selectedValue, sugarValue, proteinValue]}> */}
    <Modal {...props} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Filters
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='is-active'>
              <input 
              type="checkbox"
              id="is-active"
              name='isActive'
              checked={isActive}
              onChange={handleChange}
                />
             &nbsp; Vegetarian
            </label>
         </div>
         <div>
            <label htmlFor='is-actives'>
              <input 
              type="checkbox"
              id="is-actives"
              name='isVeganActive'
              checked={isVeganActive}
              onChange={handleChange}
              />
             &nbsp; Vegan
            </label>
          </div>
          <div>
            <SlidersCss>
            <label htmlFor='is-actives' className='health-title'>
             &nbsp; Carb Level
            </label>
              <Slider value={selectedValue}
              onChange={handleChangeValue}
              valueLabelDisplay='on'
              min={0}
              // max={100}
              size="medium"
              className="slider"
              />
            </SlidersCss>
          </div>
          {/* sugar level */}
          <div>
            <SlidersCss>
            <label htmlFor='is-actives' className='health-title'>
             &nbsp; SugarLevel
            </label>
              <Slider value={sugarValue}
              onChange={handleSugarValue}
              valueLabelDisplay='on'
              min={0}
              // max={100}
              size="medium"
              className="slider"
              />
            </SlidersCss>
          </div>

          {/* protein level */}
           <div>
            <SlidersCss>
            <label htmlFor='is-actives' className='health-title'>
             &nbsp; ProteinLevel
            </label>
              <Slider value={proteinValue}
              onChange={handleProteinValue}
              valueLabelDisplay='on'
              min={0}
              // max={100}
              size="medium"
              className="slider"
              />
            </SlidersCss>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        {/* props.onHide TODO:*/}
      <Button onClick={props.onHide} onSubmit={()=>{handleSubmit()}} type="submit">Submit</Button>
      </Modal.Footer>
    </Modal>
    <Linker props={[isActive, isVeganActive, selectedValue, sugarValue, proteinValue]}/>
    {/* </AppContext.Provider> */}
    </div>
  )
}


const SlidersCss = styled.div`
  display: block;
  margin-right: 20rem;

  .health-title{
    margin-top: .5rem
  }

  .slider{
    margin-top: 2rem;
  }

  .none{
    display: none;
  }

`

export default FilterModal