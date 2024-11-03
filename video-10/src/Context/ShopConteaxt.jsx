import { createContext } from "react";
import { products } from "../assets/Assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = "₹"
    const dlcharge = 1000

    const value = {
        products, currency, dlcharge
    }

    return(

       <ShopContext.Provider value={value}>
        {props.children}
       </ShopContext.Provider>
    )
}

export default ShopContextProvider