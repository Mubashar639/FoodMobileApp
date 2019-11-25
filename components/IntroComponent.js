import React from 'react';
import{View,StyleSheet,Image,TouchableOpacity,Alert} from 'react-native'
import {Container, Content, Button, Text,Center } from 'native-base';
import Swiper from 'react-native-swiper'
// assets
//import bording1Image from '../assets/images/On Boarding 1.png'


const Introduction  = (props) =>{
   return(
    <View style = {styles.container}>
    <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
         <Image source = {require('../assets/images/OnBoardingE1.png')} style =      {styles.backgroundImage} /> 
         <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    </View>

 )
}
       
//styles
       
       
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:300,
        top:300

    },
     wrapper: {
        width:'100%',
        height:50
     },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
    backgroundImage :{
     width:'100%',
     height:'100%',
     resizeMode: 'stretch',
     position:'absolute',


    }
});

       
       
       
       
export default Introduction;
       
       
       