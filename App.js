/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Touchable,
  Image

} from 'react-native';

import DiceOne from "./assets/dice1.png";
import DiceTwo from "./assets/dice2.png";
import DiceThree from "./assets/dice3.png";
import DiceFour from "./assets/dice4.png";
import DiceFive from "./assets/dice5.png";
import DiceSix from "./assets/dice6.png";

const App=() => {
  const [uri,seturi]=useState(DiceFive);
  const [uri2, seturi2]=useState(DiceSix);
  
  const ButtonPressed=()=>{
    let randomNumber = Math.floor(Math.random()*6)+1;
    
    switch(randomNumber){
      case 1:
        seturi(DiceOne)
        break;
      case 2:
        seturi(DiceTwo)
        break;
      case 3:
        seturi(DiceThree)
        break;
      case 4:
        seturi(DiceFour)
        break;
      case 5:
        seturi(DiceFive)
        break;
      case 6:
        seturi(DiceSix)
        break;

      default:
          seturi(DiceOne)
          break;


    }
  }
 
  return (
    <>
    <StatusBar backgroundColor="#222831" />
     <View style={styles.container} > 
     
      <View style={{flexDirection:"row"}}>
        <Image style={styles.image1} source={uri} />
     
        </View>
        <TouchableOpacity onPress={ButtonPressed} >
         <Text style={styles.text} >Click Me</Text>
       </TouchableOpacity>
     </View>
    </>
  );
};

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: "#222831",
    alignItems: 'center',
    justifyContent: 'center',
    
  },


  image1: {
    width: 200,
    height: 200,
  },

  image2: {
    width: 200,
    height: 200,
  
  },

  text:{
    fontSize:20,
    color:'#F2A365',
    marginTop:30,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#30475E",
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: "bold"
  }
});

export default App;
