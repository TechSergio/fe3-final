import { createContext, useContext, useState, useReducer, useEffect } from "react";
import axios from 'axios'

const DentStates = createContext()

const reducer = (state, action) => {
    switch (action.type){
        case 'GET_DENTS':
            return {...state, dents: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'SWITCH_THEME':
            return { ...state, theme: !state.theme };
        default:
            throw new Error()
    }
}

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavs = localFavs ? localFavs : []
const initialState = {
    dents: [],
    favs: initialFavs,
    theme: true,
}

const Context = ({children}) => {
    const [state, dispatch]=useReducer(reducer, initialState)

    const [favs, setFavs] = useState(initialFavs); 


    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_DENTS', payload: res.data}))
        .catch(err => console.log(err))

    }, [])

    useEffect( () => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [favs])



    return (
        <DentStates.Provider value={{dispatch, state, favs, setFavs}}>
            {children}
        </DentStates.Provider>
    )
}

export default Context

export const useDentStates = () => useContext(DentStates)