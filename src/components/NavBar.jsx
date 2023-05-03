import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ContextProvider } from "../context/PizzaContext"

export const NavBar = () => {

    const { checkIfIsActive } = useContext(ContextProvider)

    return(

        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <NavLink to="/" className={checkIfIsActive} class="text-white ms-3 text-decoration-none">
                    <span><b>Pizzaría Mamma Mía!</b></span>
                </NavLink>
                <NavLink to="/Carrito" className={checkIfIsActive} class="text-white ms-3 text-decoration-none">
                    <span>Carrito</span>
                </NavLink>
            </div>
        </nav>
    )
}