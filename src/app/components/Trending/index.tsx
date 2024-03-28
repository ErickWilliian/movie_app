import { useNavigation } from "@react-navigation/native";
import { View,ScrollView,Text,StyleSheet, TouchableWithoutFeedback, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel-v4";
import { StackTypes } from "../../../routes/stack";
import { useEffect, useState } from "react";


const data = [
    {
    text:"Ola"
    },
    {
        text:"Ola"
    },
    {
        text:"Ola"
    }
]

interface IFilmes {
     backdrop_path:string,
     poster_path:string
}
const {width,height} = Dimensions.get('window')

export default function Tranding(){

    const navigation = useNavigation<StackTypes>()
    const [data,setData] = useState<any>()
    const [mostrar,setMostrar] = useState(false)

   const handleClick = ()=>{
        navigation.navigate("Login")
        alert("Ativou")
   }

   useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=697bd4432e125a42051cac1166ce52ba")
        .then((response)=>{
            return response.json()
        }).then((dataApi)=> {
            
            if(dataApi && dataApi.results) setData(dataApi.results)
            setMostrar(true)
            return 0
        })
   },[])
    return(
        <View style={styles.trending}>
            <Text style={styles.text}>Trending</Text>


            {
              data && 
              
                <Carousel 
                vertical={false}
                layout={"default"}
                data={data ?? []}
                sliderWidth={width}
                itemWidth={width*0.68}
                firstItem={1}
                renderItem={({item}:any)=> <MovieCard img={item} handleClick={handleClick}/>}
                slideStyle={{display:"flex",alignItems:"center"}}
                inactiveSlideOpacity={0.68}
                />
            }
           

        </View>
    )
}

function MovieCard({img,handleClick}:any){
    const image500 = (path:string) => path ? `https://image.tmdb.org/t/p/w500//${img.poster_path}` : ""
    return(
        <TouchableWithoutFeedback style={styles.boxMovie} onPress={handleClick}>
            <Image source={{uri:image500(img)}} style={styles.boxMovie}
            />
        </TouchableWithoutFeedback>
    )
}





const styles = StyleSheet.create({
    trending:{
        marginTop:30,
        height:550
    },
    text:{
        paddingHorizontal:20,
        color:"white",
        fontSize:16
    },
    boxMovie:{
        width:width*0.68,
        height:height*0.6,
        backgroundColor:"blue",
        marginTop:30,
        borderRadius:20
    }
})