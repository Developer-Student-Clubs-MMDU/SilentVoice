import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Btn = ({ bgcolor, btnText, textcolor,press }) => {
  return (
    <TouchableOpacity 
    onPress={press}
    style={[styles.button, 
    { backgroundColor: bgcolor }]}>
      <Text style={[styles.buttonText, { color: textcolor }]}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    marginTop:"100%",
    marginLeft:"25%",
    borderRadius: 100,
    width: 250,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 22,
  },
});

export default Btn;
