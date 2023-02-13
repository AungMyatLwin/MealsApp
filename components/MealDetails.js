import { Text, View, StyleSheet } from "react-native";

function MealDetail({duration,complexity,affordability}){
    return <View style={styles.details}>
    <Text style={styles.detailItems}>{duration}m</Text>
    <Text style={styles.detailItems}>{complexity.toUpperCase()}</Text>
    <Text style={styles.detailItems}>{affordability.toUpperCase()}</Text>
</View>
}

export default MealDetail;

const styles=StyleSheet.create({
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
})