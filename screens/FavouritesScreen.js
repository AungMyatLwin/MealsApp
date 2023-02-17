
import { MEALS } from "../data/dummy-data";
// import {useSelector} from "react-redux";

import MealsList from "./MealsList/MealsList";


function Favourite(){
    const favouriteMealContext=useContext(FavouritesContext);
    //  const favouriteMealId= useSelector((state)=> state.favouriteMeals.ids);
    const favMeals=MEALS.filter((meal)=> favouriteMealContext.ids.includes(meal.id));
    // const favMeals=MEALS.filter((meal)=> favouriteMealId.includes(meal.id));
    return <MealsList items={favMeals}/>
}

export default Favourite;
