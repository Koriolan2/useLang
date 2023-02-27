import React, {createContext} from "react";
import useLang from "./useLang";

export const GlobalContext = createContext();

const Context = (props) => {
    const [lang, setLang] = useLang();
    
    console.log(lang)
    let value = {
        lang, 
        setLang
    }



    return (
        <GlobalContext.Provider value = {value}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default Context;