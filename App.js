import { StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'

import Categories from './screens/CategoriesScreen';
import Favourite from './components/Favourite';
import MealsOverview from './screens/MealsOverview';
import MealsDetails from './screens/MealsDetailsScreen';

import FavouriteContextProvider from './store/context/favourites-context';

const Stack=createNativeStackNavigator();
const Drawer= createDrawerNavigator();

function DrawerNavigation(){
  return <Drawer.Navigator screenOptions={{
    headerStyle:{
     backgroundColor:'#351401'
   },headerTintColor:'white',
   sceneContentStyle:{
     "backgroundColor":"#3f2f25",
   }, drawerContentStyle:{
    backgroundColor:"#351401",
   }, drawerInactiveTintColor:'white',
   drawerActiveTintColor:"#E6C0AA"
 }}>
    <Drawer.Screen name='Categories' component={Categories} options={
      {title:"All Categories",
      drawerIcon:({color, size})=>( <MaterialIcons color={color} size={size} name="list-alt"/>)}
     } />
    <Drawer.Screen name='Favourite' component={Favourite}
    options={
      {
      drawerIcon:({color, size})=>( <MaterialIcons color={color} size={size} name="star"/>)}
     } />
  </Drawer.Navigator>
}
// explain the react navigation 
export default function App() {
  
  return <>
  <StatusBar style='light'/>
  <FavouriteContextProvider>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
       headerStyle:{
        backgroundColor:'#351401'
      },headerTintColor:'white',
      contentStyle:{
        "backgroundColor":"#3f2f25",
      }
    }}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} options={{
       headerShown:false}}/>
      <Stack.Screen name="MealsOverview" component={MealsOverview}/>
      <Stack.Screen name="MealsDetails" component={MealsDetails} options={{
        title:"About The Meal"}} />
    </Stack.Navigator>
  </NavigationContainer>
  
  </FavouriteContextProvider>  
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
