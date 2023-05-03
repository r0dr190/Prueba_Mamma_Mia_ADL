import { useContext } from "react"
import { ContextProvider } from "../context/PizzaContext"
import { useNavigate } from "react-router-dom"

export const Home = () => {

    const { pizzas } = useContext(ContextProvider)

    const navigate = useNavigate()

    return(
        
        <div>
                { 
                    pizzas.map((pizza) => {

                    return(
                    <div className="card col-3 justify-content-center">
                        <div className="" key={pizza.id}>
                            <img src={pizza.img} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{pizza.name}</h5>
                                <p className="card-text">Ingredientes.</p>
                            </div>
                            <div>
                                <p>{pizza.ingredients} </p>
                            </div>
                            <div>
                                <p><b>$ {pizza.price}</b></p>
                            </div>
                            <div className="card-body ">
                                <button onClick={() => navigate(`/Pizza/${pizza.id}`)} className="btn btn-primary mx-2">Ver Más</button>
                                <button className="btn btn-danger mx-2">Añadir</button>
                            </div>
                        </div>
                    </div>
                    )
                })
                }
        </div>
    )
}