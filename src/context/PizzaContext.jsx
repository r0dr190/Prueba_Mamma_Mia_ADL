import { createContext, useEffect, useState } from "react";
import { BrowserRouter, /* useParams */ } from "react-router-dom";
import { Enrutador } from "../components/Enrutador";
import { NavBar } from "../components/NavBar";

export const ContextProvider = createContext({})

export const CtxProvider = () => {

    /* ********* */
    const [ pizzas , setPizzas ] = useState([])

    useEffect(() => {

        document.title = 'Mamma Mía!'
        pizzaList();
    }, []);

    const pizzaList = async () => {

        const response = await fetch('pizzas.json')
        /* console.log(response) */
        const pizza = await response.json()
        /* console.log(pizza) */
        setPizzas(pizza)
    }

    /* ********** */
    /* const { id } = useParams()

    const [ selectedPizza , setSelectedPizza ] = useState([])

    useEffect(() => {

        getSelectedPizza()
    }, [])

    const getSelectedPizza = async() => {

        const path = `pizzas.json/${id}`

        const response = await fetch(path)

        const selecPizza = await response.json()

        setSelectedPizza(selecPizza)

        console.log(selectedPizza)
    } */

    /* ********** */
    const checkIfIsActive = (({ isActive }) => (isActive ? 'active-link' : 'inactive-link'))

    const contextValues = { checkIfIsActive , pizzaList , pizzas }

    return(

        <ContextProvider.Provider value={contextValues}>
            <BrowserRouter>
                <NavBar/>
                <Enrutador/>
            </BrowserRouter>
        </ContextProvider.Provider>
    )
}