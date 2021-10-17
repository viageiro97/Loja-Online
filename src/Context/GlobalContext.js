import React, { 
    createContext, 
    useEffect, 
    useReducer, 
    useState } from 'react'
import appReducer from './AppReducer';

function getSaved(item){
        const saved = localStorage.getItem(item);
        const initialValue = JSON.parse(saved);
        return initialValue || "";
}

const GlobalContext = createContext();

const initialState = {
    cart: getSaved("cart"),
    snackBar:{
        open: false,
        message: "",
        severity: ""
    }

};

export function GlobalContextProvider({children}) {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const [snackBarOpen, setSnackBarOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }, [state.cart]);

    return (
        <GlobalContext.Provider value={
            {
                state,
                dispatch,
                snackBarOpen,
                setSnackBarOpen
            }
        }
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
