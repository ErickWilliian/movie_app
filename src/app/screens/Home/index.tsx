import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import NavHome from '../../components/NavHome';
import Tranding from '../../components/Trending';
import ScrollMovies from '../../components/ScrollMovies';

export default function Home({navigation }:any) {
  return (
    <View style={styles.bg}>
        
        <ScrollView>
            <NavHome/>
            <Tranding/>
            <ScrollMovies name={"Upcoming"}/>
            <ScrollMovies name={"Top Reted"}/>
        </ScrollView>
        <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:"#1F201E",
        height:"100%"
    }
})