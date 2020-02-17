import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';//배경이 그라디언트
import { Ionicons } from '@expo/vector-icons';//아이콘 설정


const weatherCases = {
    Rain : {
        colors:["#00C6FB" ,"#005BEA"],
        title : "Rain like a MF",
        subtitle:"For more info look outside",
        icon:"ios-rainy"
    },
    Clear : {
        colors:["#FEF253" ,"#FF7300"],
        title : "Sunny as fuck",
        subtitle:"Go get your ass burnt",
        icon:"ios-sunny"
    },
    Thunderstorm : {
        colors:["#00ECBC" ,"#007ADF"],
        title : "Thunderstorm in the house",
        subtitle:"Actually, outside of the house",
        icon:"ios-thunderstorm"
    },
    Clouds : {
        colors:["#D7D2CC" ,"#304352"],
        title : "Clouds",
        subtitle:"I know, fucking boring",
        icon:"ios-clouds"
    },
    Snow : {
        colors:["#7DE2FC" ,"#B9B6E5"],
        title : "Colde as balls",
        subtitle:"Do you want to build a snowman? Fuck no.",
        icon:"ios-snow"
    },
    Drizzle : {
        colors:["#89F7FE" ,"#66A6FF"],
        title : "Drizzle",
        subtitle:"Is like rain, ",
        icon:"ios-rainy-outline"
    }
}
function Weather({weatherName, temp}) {
        return (
            <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} /> 
                    {/* 아이콘 설정 */}
                    <Text style={styles.temp}>{temp}º</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                    <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
                </View>
            </LinearGradient>       
        );
}


export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper : {
        flex:1,
        alignItems : "center",
        justifyContent : "center"
    },
    temp: {
        fontSize:38,
        color:"white",
        marginTop:10,
    },
    lower : {
        flex:1,
        alignItems : "flex-start",
        justifyContent : "flex-end",
        paddingLeft:25
    },
    
    title : {
        fontSize:38,
        color:"white",
        marginBottom:10,
        fontWeight : "300"

    },
    subtitle : {
        fontSize:24,
        color:"white",
        marginBottom:24,
        
    }

    
});