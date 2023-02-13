import { Image, Text, View, } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetails";

export default function MealsDetails({navigation, route}) {
 const id=route.params.id;
 const selectedMeal= MEALS.find((meal)=>meal.id===id);
    return (
      <View>
       <Image source={{uri:selectedMeal.imageUrl}} />
       <Text>{selectedMeal.title}</Text>
       <View>
      <MealDetail duration={selectedMeal.duration} 
      affordability={selectedMeal.affordability} 
      complexity={selectedMeal.complexity}/>
       </View>
       <Text>Ingredients</Text>
       {selectedMeal.ingredients.map(ingredient=> <Text key={ingredient}>{ingredient}</Text>)}
       <Text>Steps</Text>
       {selectedMeal.steps.map(step=><Text key={step}>{step}</Text>)}
      </View>
    );
  }