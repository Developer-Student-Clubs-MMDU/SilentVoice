import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import SplashScreen from './SplashScreen'

const Home = () => {
  return (
   <SplashScreen>
    <View style={{
        marginHorizontal:40,
        alignItems:'center',
        width:"100%",  
        marginTop:"50%"
    }}>
         <View style={{
          height: 120, 
          width: "35%",
          backgroundColor: "white",
          borderRadius: 20, 
          marginVertical: 20,
          padding:"4%"
        }}>
            <ImageBackground source={require("./assets/logo.png")}
            style={{height:"100%",width:"100%"}}
            />
        </View>
    <Text style={{color:"white", fontSize: 34,textAlign:'center'}}>Welcome to</Text>
    <Text style={{color:"white", fontSize: 54,textAlign:'center'}}>SilentVoice</Text>
    </View>
    {/* <Text style={{ color:"white",fontSize:"14"}}>Sign in </Text> */}
   </SplashScreen>
  )
}

export default Home