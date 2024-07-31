import { View, Text, ImageBackground } from 'react-native'
import React, { children } from 'react'

const SplashScreen = ({children}) => {
  return (
    <View>
      <ImageBackground source={require("./assets/bg.png")}
      style={{ height:'100%'}}
      />
      <View style={{position:"absolute"}}>
        {children}
      </View>
    </View>
  )
}

export default SplashScreen