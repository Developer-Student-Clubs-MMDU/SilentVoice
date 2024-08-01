import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import SplashScreen from './SplashScreen';
import Btn from './Bttn';
import { grey, whhite } from './Constant';

const Home = (props) => {
  return (
    <SplashScreen>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <ImageBackground 
            source={require("./assets/logo.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.titleText}>SilentVoice</Text>
      </View>
      <Btn 
      bgcolor={grey} textcolor={whhite} btnText="Sign in" 
      press={()=> props.navigation.navigate("signin")} />
    </SplashScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    alignItems: 'center',
    width: "100%",
    marginTop: "50%",
  },
  logoContainer: {
    height: 120,
    width: "35%",
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 20,
    padding: "4%",
  },
  logo: {
    height: "100%",
    width: "100%",
  },
  welcomeText: {
    color: "white",
    fontSize: 34,
    textAlign: 'center',
  },
  titleText: {
    color: "white",
    fontSize: 54,
    textAlign: 'center',
  },
  signInText: {
    color: "white",
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "400",
    marginTop: "100%",
    marginLeft: "20%",
  },
});

export default Home;
