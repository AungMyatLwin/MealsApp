import { FlatList, StyleSheet, Text, View } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';


function Categories({ navigation }){
    function renderCategoryItem(itemData){
            function pressHandler(){
                navigation.navigate('MealsOverview',{categoryID: itemData.item.id});
            };
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPressed={pressHandler}/>
    };
    
    return <FlatList data={CATEGORIES} 
    keyExtractor={(item)=>item.id} 
    renderItem={renderCategoryItem}
    numColumns={2}>
    </FlatList>
};

export default Categories;

const styles=StyleSheet.create({
    viewContainer:{
        flex:1
    }
})