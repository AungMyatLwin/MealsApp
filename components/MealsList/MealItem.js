import { Image, StyleSheet, Text, View, Pressable, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

import MealDetails from '../MealDetails' 
function MealItem({title, imageUrl, duration,complexity, affordability,onpress}){
    // alternative ways of navigation
    // const navigation= useNavigation();
    // navigation.navigate('MealsDetails',{
    //     mealid:id
    // })

    return <View style={styles.mealItem}>
        <Pressable onPress={onpress}  android_ripple={{color:"#ccc"}} style={({pressed})=>{pressed?styles.pressed:null}}>
       <View style={styles.innerContainer}>
       <View>
            <Image source={{uri:imageUrl}} style={styles.imageStyle}/>
            <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
       </View>
    </Pressable>
    </View>
}

export default MealItem;

const styles=StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow: Platform.OS==="android"? 'hidden':'visible',
        backgroundColor:"white",
        elevation:4,
        shadowColor:'black',
        shadowOffset:0.5,
        shadowOpacity:{width:0, height:2},
        shadowRadius: 16, 
       
    },
    innerContainer:{
        borderRadius:8,
        overflow:"hidden"
    },  
    imageStyle:{
        width:'100%',
        height:200,
        borderRadius:40
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        margin:8
    },
   
    pressed:{
        opacity:0.8
    }
});