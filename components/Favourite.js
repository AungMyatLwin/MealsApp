
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/context/favourites-context";
import MealsList from "./MealsList/MealsList";


function Favourite(){
    const favouriteMealContext=useContext(FavouritesContext);
    const favMeals=MEALS.filter((meal)=> favouriteMealContext.ids.includes(meal.id));
    return <MealsList items={favMeals}/>
}

export default Favourite;
