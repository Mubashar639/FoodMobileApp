import React from 'react';
import{View,StyleSheet,Image,TouchableOpacity,Alert} from 'react-native'
import {Container, Content, Button, Text,Center } from 'native-base';
import * as Font from 'expo-font';

// assets
//import bording1Image from '../assets/images/On Boarding 1.png'


const Bording2  = (props) =>{
   return(
    <View style = {styles.container}>
        <Image source = {require('../assets/images/OnBoarding2.png')} style =      {styles.backgroundImage}> 
        </Image>
        <Button  small  bordered light style = {styles.skipButton} >
             <Text></Text>
         </Button>
        <Button onPress = {()=>props.navigation.navigate('Bording3')} style = {styles.button} bordered light large  ><Text></Text></Button>
     </View>
 )
}
       
//styles
       
              

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    buttonContainer:{
          width:250,
        height:70,
        backgroundColor:' rgb(253,244,226)',
         position:'relative',
        left:130,
        bottom:25,
    },
    button:{
        marginTop:760,
        bottom:35,
        width:200,
       
        left:140
        
      
    },
    skipButton:{
        width:100,
        top:45,
        left:370
        
    },
    buttonText:{
        color:'rgb(58,70,149)',
        textAlign:'center',
        marginLeft:30
    },
//   rgb(253,244,226)
    backgroundImage :{
     width:'100%',
     height:'100%',
     resizeMode: 'stretch',
     position:'absolute',


    }
});

       
       
       
       
export default Bording2;
       
       
       