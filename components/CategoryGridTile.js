import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
// import {useNavigation} from '@react-navigation/native';

function CategoryGridTile({title, color, onPressed}){
    return <View style={styles.gridItem}>
        <Pressable android_ripple={{colorr:"#cccccc"}} onPress={onPressed} style={({pressed})=>[styles.button,pressed?styles.buttonPressed:null]}>
            <View style={[styles.innerContainer,{backgroundColor:color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        backgroundColor:"white",
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.25,
        shadowRadius:8,
        overflow:Platform.OS==='android'?"hidden":"visible"
    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity:0.5
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:"center",
        alignItems:"center",
        shadowRadius:8,
    },
    title:{
        fontWeight:"bold",
        fontSize:18
    }
});