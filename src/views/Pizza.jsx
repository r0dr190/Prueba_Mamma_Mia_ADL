import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Pizza = () => {

    const { id } = useParams()

    const [ selectedPizza , setSelectedPizza ] = useState([])

    useEffect(() => {

        getSelectedPizza();
    }, []);

    const getSelectedPizza = async() => {

        const path = `pizzas.json/${id}`

        /* console.log(path) */

        const response = await fetch(path)
        /* console.log(response) */
        const selecPizza = await response.json()
        console.log(selecPizza)
        setSelectedPizza(selecPizza)

        /* console.log(selectedPizza) */
    }

    return(

        <div>
            <h1>Pizza {selectedPizza}</h1>
        </div>
    )
}