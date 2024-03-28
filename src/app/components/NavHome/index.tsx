import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

export default function NavHome() {
  return (
    <View style={styles.container}>
        <View style={styles.navContainer}>
            <Text style={styles.links}>Voltar</Text>
            <Text style={styles.links}>Movie</Text>
            <Text style={styles.links}>Menu</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        marginHorizontal:"auto",

        paddingHorizontal:20,
        width:"100%",
    },
    navContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    links:{
        color:"white",
    }
})