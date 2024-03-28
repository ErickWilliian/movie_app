import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import NavHome from '../../components/NavHome';
import Tranding from '../../components/Trending';
import ScrollMovies from '../../components/ScrollMovies';

export default function Login({navigation }:any) {
  return (
    <View style={styles.bg}>
        <Text>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:"#1F201E",
        height:"100%"
    }
})