import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function Carticon({navigation}) {
    
    return (
    
    <View style={{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        position:'absolute',
        bottom:50,
        zIndex: 999,
    }}>
    
    <View style={{
        flexDirection:'row',
        justifyContent:'center',
        width:'100%'
    }}>
       
        <TouchableOpacity
        onPress={()=>navigation.navigate('Ingredient')}
        style={{
            marginTop: 20,
            backgroundColor: 'black',
            alignItems:'center',
            padding:16,
            borderRadius: 30,
            width:300,
            position:'relative'

        }}> 
            
            <Text style={{color:'white', fontSize:20}}>
            <FontAwesome5 name='hamburger' style={{ color: 'white', fontSize: 18, marginRight: 10}}/>   3 Food Items Selected   <AntDesign name='right' style={{ color: 'white', fontSize: 18, marginRight: 10}}/>
            </Text>
        </TouchableOpacity>
        
    </View>
   
    </View>
    
  )
}