import { View,ScrollView,Text,StyleSheet } from "react-native";


interface IProps{
    name:string
}




export default function ScrollMovies({name}:IProps){
    return(
        <View style={styles.movies}>
            <View>
                <Text style={styles.text}>{name}</Text>
            </View>
            
            <ScrollView horizontal={true}>
                <View style={styles.boxMovie}></View>
                <View style={styles.boxMovie}></View>
                <View style={styles.boxMovie}></View>
                <View style={styles.boxMovie}></View>
                <View style={styles.boxMovie}></View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    movies:{
        marginTop:5,
        height:370
    },
    text:{
        paddingHorizontal:20,
        color:"white",
        fontSize:16
    },
    boxMovie:{
        width:160,
        height:250,
        backgroundColor:"blue",
        marginHorizontal:10,
        marginTop:30,
        borderRadius:20
    }
})