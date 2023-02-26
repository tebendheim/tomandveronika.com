import React, {createContext, useState}from 'react';

export const LangContext = createContext()

const LangProvider = (props) => {
    const [lang, setLang] = useState("no")
    const [erNorsk, setNorsk] =useState(true)

    const setLanguage = () => {
        if (lang == "no"){
            setLang("en")
            setNorsk(false)
        }else{
            setLang("no");
            setNorsk(true)
        }
    }
    return (
        <LangContext.Provider value={{lang, erNorsk, setLanguage}}>
            {props.children}
        </LangContext.Provider>
    )

}
export default LangProvider;
