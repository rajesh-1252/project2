import { createContext, useReducer } from "react";

export const FilterContext = createContext()


const filterReducer = (state, action)=>{
    switch (action.type) {
        case 'PROTEIN_VALUE':
            let value = {...action.payload}
            return {...state,proteinValue:value}    
            break;
        case 'SUGAR_VALUE':
            return 0;
            break;
        default:
            break;
    }
}

export const FilterContextProvider = ({children})=>{

    const [state, dispatch] = useReducer(filterReducer, {
        proteinValue : 0,
        isVegen : false,
        isActive: false,
        seletectedValue: 0,
        sugarValue: 0
    } )
    return(
        <FilterContext.Provider value={{state, dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}