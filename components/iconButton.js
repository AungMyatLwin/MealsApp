import { Pressable, StyleSheet } from "react-native";
import {AntDesign} from '@expo/vector-icons'

function IconButton({icon, color, onPress}){
    return<Pressable style={({pressed})=>pressed&&styles.pressed}  onPress={onPress}>
         <AntDesign  name={icon} size={24} color={color}/>
    </Pressable>
}

export default IconButton;

const styles=StyleSheet.create({
    pressed:{
        opacity:0.7
    }
})