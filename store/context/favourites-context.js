import { createContext } from "react";

const FavouritesContext= createContext({
    ids:[],
    addFavourite: (id)=>{},
    removeFavourite:(id)=>{}
});


function FavouriteContextProvider({children}){
    return <FavouritesContext.Provider>
        {children}
    </FavouritesContext.Provider>
}

export default FavouriteContextProvider;


/**
 * 
TestContext.Provider is a
React component used to provide 
a value to all React components below in the tree.
It accepts a value prop to be passed to consuming
components that are descendants of this Provider.
 */