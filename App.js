import { StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './screens/CategoriesScreen';
import MealsOverview from './screens/MealsOverview';
import { StatusBar } from 'expo-status-bar';
import MealsDetails from './screens/MealsDetailsScreen';

const Stack=createNativeStackNavigator();
// explain the react navigation 
export default function App() {
  
  return <>
  <StatusBar style='light'/>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
       headerStyle:{
        backgroundColor:'#351401'
      },headerTintColor:'white',
      contentStyle:{
        "backgroundColor":"#3f2f25",
      }
    }}>
      <Stack.Screen name="MealsCategories" component={Categories} options={{
       title:"All Categories"}}/>
      <Stack.Screen name="MealsOverview" component={MealsOverview}/>
      <Stack.Screen name="MealsDetails" component={MealsDetails} />
    </Stack.Navigator>
    
  </NavigationContainer>
    </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    justifyContent:'center',
  },
  cent:{
    alignItems:'center'
  }
});
