import { Route, Routes } from "react-router-dom"
import { Carrito } from "../views/Carrito"
import { Home } from "../views/Home"
import { Pizza } from "../views/Pizza"

export const Enrutador = () => {

    return(

        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Pizza/:id" element={<Pizza />} />
                <Route path="/Carrito" element={<Carrito />} />
            </Routes>
        </div>
    )
}