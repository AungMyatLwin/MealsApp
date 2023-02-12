import { StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './screens/CategoriesScreen';
import MealsOverview from './screens/MealsOverview';
import { StatusBar } from 'expo-status-bar';

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
      {/* // options={({ route , navigation})=>{ */}
      {/* //   const catID= route.params.categoryId;
      //   return{
      //     title:catID
      //   }}
      // } */}

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
