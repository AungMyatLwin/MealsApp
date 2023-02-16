import { FlatList, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealItem from './MealItem';

function MealsList({items}){
    const navigation = useNavigation();
    function renderMealItem(itemData){
        const item= itemData.item;

        const mealItemProps={
            title:item.title,
            imageUrl:item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
            onpress:onPress,
        }
        function onPress(){
            return navigation.navigate('MealsDetails',{id:item.id})
            }
        // console.log(imageUrl)
        return<MealItem {...mealItemProps} />
    }

    return (<View style={styles.container}>
    <FlatList data={items} keyExtractor={(item)=>item.id} renderItem={renderMealItem} />
    </View>);
}

export default MealsList;
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
});