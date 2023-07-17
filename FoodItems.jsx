import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Carticon from './Carticon'


export default function FoodItems() {
  return (
    <View>
   
    <ScrollView>
    <View style={{display:'flex',flexDirection:'row', alignItems:'center', borderBottomColor:'grey', borderBottomWidth:2, paddingBottom:15}}>
      <View>

      <View style={{display:'flex', flexDirection:'row', alignItems:'center',margin:10}}>
        <Text style={{fontSize:18}}>Masala Muglai </Text>
        <Octicons name='dot-fill' style={{ color: 'green', fontSize: 30, marginLeft:5}}/>
        <Text style={{borderRadius:10, borderWidth:3, borderColor:'green', color:'white', backgroundColor:'green', marginLeft:5}}>
          4.2 <AntDesign name='star' style={{ color: 'white', fontSize: 10}}/>
        </Text>
      </View>

      <View style={{display:'flex', alignItems:'flex-start',justifyContent:'flex-start'}}>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',padding:10}}>
          <View>
            <MaterialCommunityIcons name='fridge-outline' style={{ color: 'black', fontSize: 20, marginLeft:40}}/>
            <Text style={{fontSize:8,marginLeft:20}}>Refrigerator</Text>
          </View>

          <View>
            <MaterialCommunityIcons name='fridge-outline' style={{ color: 'black', fontSize: 20, marginLeft:40}}/>
            <Text style={{fontSize:8,marginLeft:20}}>Refrigerator</Text>
          </View>

          <View style={{borderRightColor:'grey',borderRightWidth:2, marginLeft:20}}>
          <Text></Text>
          </View>

          <View style={{marginLeft:20}}>
              <Text>Ingredients</Text>
              <Text style={{color:'orange'}}>View List > </Text>
          </View>

          <View>
            <Text></Text>
          </View>
      </View>

      <View style={{marginLeft:20}}>
        <Text style={{color:'gray'}}>Chicken friend in deep tomato sauce </Text>
        <Text style={{color:'gray'}}>with delicious spices.</Text>

      </View>

      </View>


     

    </View>

    <View>
          <Image style={styles.img} source={require('./assets/Shrimp-burrito-bowl-4.jpg')}/>
          <Text style={{marginLeft:70, marginTop:10, borderColor:'orange', borderWidth:3, color:'orange', padding:3}}>ADD +</Text>
    </View>

   

    

  </View>


  <View style={{display:'flex',flexDirection:'row', alignItems:'center', borderBottomColor:'grey', borderBottomWidth:2, paddingBottom:15}}>
      <View>

      <View style={{display:'flex', flexDirection:'row', alignItems:'center',margin:10}}>
        <Text style={{fontSize:18}}>Masala Muglai </Text>
        <Octicons name='dot-fill' style={{ color: 'green', fontSize: 30, marginLeft:5}}/>
        <Text style={{borderRadius:10, borderWidth:3, borderColor:'green', color:'white', backgroundColor:'green', marginLeft:5}}>
          4.2 <AntDesign name='star' style={{ color: 'white', fontSize: 10}}/>
        </Text>
      </View>

      <View style={{display:'flex', alignItems:'flex-start',justifyContent:'flex-start'}}>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',padding:10}}>
          <View>
            <MaterialCommunityIcons name='fridge-outline' style={{ color: 'black', fontSize: 20, marginLeft:40}}/>
            <Text style={{fontSize:8,marginLeft:20}}>Refrigerator</Text>
          </View>

          <View>
            <MaterialCommunityIcons name='fridge-outline' style={{ color: 'black', fontSize: 20, marginLeft:40}}/>
            <Text style={{fontSize:8,marginLeft:20}}>Refrigerator</Text>
          </View>

          <View style={{borderRightColor:'grey',borderRightWidth:2, marginLeft:20}}>
          <Text></Text>
          </View>

          <View style={{marginLeft:20}}>
              <Text>Ingredients</Text>
              <Text style={{color:'orange'}}>View List > </Text>
          </View>

          <View>
            <Text></Text>
          </View>
      </View>

      <View style={{marginLeft:20}}>
        <Text style={{color:'gray'}}>Chicken friend in deep tomato sauce </Text>
        <Text style={{color:'gray'}}>with delicious spices.</Text>

      </View>

      </View>


     

    </View>

    <View>
          <Image style={styles.img} source={require('./assets/Shrimp-burrito-bowl-4.jpg')}/>
          <Text style={{marginLeft:70, marginTop:10, borderColor:'orange', borderWidth:3, color:'orange', padding:3}}>ADD +</Text>
    </View>

   

    

  </View>


  <View style={{display:'flex',flexDirection:'row', alignItems:'center', borderBottomColor:'grey', borderBottomWidth:2, paddingBottom:15}}>
      <View>

      <View style={{display:'flex', flexDirection:'row', alignItems:'center',margin:10}}>
        <Text style={{fontSize:18}}>Masala Muglai </Text>
        <Octicons name='dot-fill' style={{ color: 'green', fontSize: 30, marginLeft:5}}/>
        <Text style={{borderRadius:10, borderWidth:3, borderColor:'green', color:'white', backgroundColor:'green', marginLeft:5}}>
          4.2 <AntDesign name='star' style={{ color: 'white', fontSize: 10}}/>
        </Text>
      </View>

      <View style={{display:'flex', alignItems:'flex-start',justifyContent:'flex-start'}}>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',padding:10}}>
          <View>
            <MaterialCommunityIcons name='fridge-outline' style={{ color: 'black', fontSize: 20, marginLeft:40}}/>
            <Text style={{fontSize:8,marginLeft:20}}>Refrigerator</Text>
          </View>

          <View>
            <MaterialCommunityIcons name='fridge-outline' style={{ color: 'black', fontSize: 20, marginLeft:40}}/>
            <Text style={{fontSize:8,marginLeft:20}}>Refrigerator</Text>
          </View>

          <View style={{borderRightColor:'grey',borderRightWidth:2, marginLeft:20}}>
          <Text></Text>
          </View>

          <View style={{marginLeft:20}}>
              <Text>Ingredients</Text>
              <Text style={{color:'orange'}}>View List > </Text>
          </View>

          <View>
            <Text></Text>
          </View>
      </View>

      <View style={{marginLeft:20}}>
        <Text style={{color:'gray'}}>Chicken friend in deep tomato sauce </Text>
        <Text style={{color:'gray'}}>with delicious spices.</Text>

      </View>

      </View>


     

    </View>

    <View>
          <Image style={styles.img} source={require('./assets/Shrimp-burrito-bowl-4.jpg')}/>
          <Text style={{marginLeft:70, marginTop:10, borderColor:'orange', borderWidth:3, color:'orange', padding:3}}>ADD +</Text>
    </View>

   

    

  </View>


  <View style={{display:'flex',flexDirection:'row', alignItems:'center', borderBottomColor:'grey', borderBottomWidth:2, paddingBottom:15}}>
      <View>

      <View style={{display:'flex', flexDirection:'row', alignItems:'center',margin:10}}>
        <Text style={{fontSize:18}}>Masala Muglai </Text>
        <Octicons name='dot-fill' style={{ color: 'green', fontSize: 30, marginLeft:5}}/>
        <Text style={{borderRadius:10, borderWidth:3, borderColor:'green', color:'white', backgroundColor:'green', marginLeft:5}}>
          4.2 <AntDesign name='star' style={{ color: 'white', fontSize: 10}}/>
        </Text>
      </View>

      <View style={{display:'flex', alignItems:'flex-start',justifyContent:'flex-start'}}>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',padding:10}}>
          <View>
            <MaterialCommunityIcons name='fridge-outline' style={{ color: 'black', fontSize: 20, marginLeft:40}}/>
            <Text style={{fontSize:8,marginLeft:20}}>Refrigerator</Text>
          </View>

          <View>
            <MaterialCommunityIcons name='fridge-outline' style={{ color: 'black', fontSize: 20, marginLeft:40}}/>
            <Text style={{fontSize:8,marginLeft:20}}>Refrigerator</Text>
          </View>

          <View style={{borderRightColor:'grey',borderRightWidth:2, marginLeft:20}}>
          <Text></Text>
          </View>

          <View style={{marginLeft:20}}>
              <Text>Ingredients</Text>
              <Text style={{color:'orange'}}>View List > </Text>
          </View>

          <View>
            <Text></Text>
          </View>
      </View>

      <View style={{marginLeft:20}}>
        <Text style={{color:'gray'}}>Chicken friend in deep tomato sauce </Text>
        <Text style={{color:'gray'}}>with delicious spices.</Text>

      </View>

      </View>


     

    </View>

    <View>
          <Image style={styles.img} source={require('./assets/Shrimp-burrito-bowl-4.jpg')}/>
          <Text style={{marginLeft:70, marginTop:10, borderColor:'orange', borderWidth:3, color:'orange', padding:3}}>ADD +</Text>
    </View>

   

    

  </View>

  
  </ScrollView>
  
  </View>

  

  

    
  )
}

const styles = StyleSheet.create({
  img:{
    height: 80,
    width: 80,
    marginLeft:50
  }
})

