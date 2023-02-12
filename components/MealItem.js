import { Image, StyleSheet, Text, View, Pressable, Platform } from "react-native";

function MealItem({title, imageUrl, duration,complexity, affordability }){
    return <View style={styles.mealItem}>
        <Pressable onPress={()=>console.log("pressed")} android_ripple={{color:"#ccc"}} style={({pressed})=>{pressed?styles.pressed:null}}>
       <View style={styles.innerContainer}>
       <View>
            <Image source={{uri:imageUrl}} style={styles.imageStyle}/>
            <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
            <Text style={styles.detailItems}>{duration}m</Text>
            <Text style={styles.detailItems}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItems}>{affordability.toUpperCase()}</Text>
        </View>
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
    details:{
        flexDirection:"row",
        alignItems: "center",
        padding:8,
        justifyContent: "center"
    },
    detailItems:{
        marginHorizontal: 4,
        fontSize:12,
    },
    pressed:{
        opacity:0.8
    }
});