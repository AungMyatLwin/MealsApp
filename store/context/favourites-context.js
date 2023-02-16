import { createContext, useState } from "react";

export const FavouritesContext= createContext({
    ids:[],
    addFavourite: (id)=>{},
    removeFavourite:(id)=>{}
});


function FavouriteContextProvider({children}){
    const [favouriteMealIds,setFavouriteMealIds]=useState([]);
    function addFavourite(id){
        setFavouriteMealIds((currentFavIds)=>[...currentFavIds, id]);
    }
    function removeFavourite(id){
        setFavouriteMealIds((currentFavIds)=>[currentFavIds.filter(mealId=>mealId.id!==id)]);
    }
    const value={
        ids:favouriteMealIds,
        addFavourite:addFavourite,
        removeFavourite:removeFavourite
    }
    return <FavouritesContext.Provider value={value}>
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