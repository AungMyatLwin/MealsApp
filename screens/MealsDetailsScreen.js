import { useLayoutEffect } from "react";
import { Button, Image, StyleSheet, Text, View, } from "react-native";

import List from "../components/MealDetail/List";
import MealDetail from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from "../data/dummy-data";
import { ScrollView } from "react-native-web";

export default function MealsDetails({navigation, route}) {
 const id=route.params.id;
 const selectedMeal= MEALS.find((meal)=>meal.id===id);
 const headerButtonPressHandler=()=>console.log('Pressed');
 useLayoutEffect(()=>{
  navigation.setOptions({
    headerRight:()=>{
      return <Button title="Press me " onPress={headerButtonPressHandler}/>
    }
  },[navigation, headerButtonPressHandler])
 })
    return (
      <ScrollView style={styles.rootContainer}>
       <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
       <Text style={styles.title}>{selectedMeal.title}</Text>
       <View>
      <MealDetail duration={selectedMeal.duration} 
      affordability={selectedMeal.affordability} 
      complexity={selectedMeal.complexity}
      textStyle={styles.detailText}/>
       </View>
      <View style={styles.listOuter}>
      <View style={styles.listContainer}>
       <Subtitle>Ingredients</Subtitle>
       {/* {selectedMeal.ingredients.map(ingredient=> <Text key={ingredient}>{ingredient}</Text>)} */}
       <List data={selectedMeal.ingredients}/>
       <Subtitle>Steps</Subtitle>
       {/* {selectedMeal.steps.map(step=><Text key={step}>{step}</Text>)} */}
       <List data={selectedMeal.steps}/>
       </View>
      </View>
      </ScrollView>
    );
  }

const styles=StyleSheet.create({
  rootContainer:{
    marginBottom:32
  },
  image:{
    width:'100%',
    height:350
  },
  title:{
    fontWeight:"bold",
    fontSize:24,
    margin:8,
    textAlign:"center",
    color:"white"
  },
  detailText:{
    color:'white'
  },
  listContainer:{
    maxWidth:"80%",
  },
  listOuter:{
    alignItems:'center'
  }
 
});