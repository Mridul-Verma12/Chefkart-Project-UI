import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Pressable, Button, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FoodItems from './FoodItems';
import Carticon from './Carticon';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Homescreen() {
  return (
    <View >
      
      
      <View style={{display:"flex", flexDirection:"row", marginTop:50,padding:10,}}>
      <AntDesign name='left' style={{ color: 'grey', fontSize: 30}}/>
      <Text style={{fontSize:20, marginLeft:10}}> Select Dishes</Text>
      <StatusBar style="auto" />
      </View>

      <View style={{backgroundColor:'black', minHeight:40}}>
        <Text>hello</Text>
      </View>

      <View style={{display:'flex', flexDirection:'row', marginLeft:45, marginTop:10, borderRadius: 7, backgroundColor:'#f2f2f2',width:'80%',height: 50, padding: 10}}>
        <AntDesign name='calendar' style={{ color: 'black', fontSize:25,marginRight:10}}/>
        <Text style={{marginTop:5}}>21 May 2021</Text>
        <Ionicons name='ios-alarm-outline' style={{ color: 'black', fontSize:25,marginRight:10, marginLeft:40}}/>
        <Text style={{marginTop:5}}>10:30 Pm-12:30 Pm</Text>
      </View>

      <View style={{display:'flex', marginLeft: 15,}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable style={styles.button}>
        <Text style={styles.text}>Indian</Text>
        </Pressable>

        <Pressable style={styles.button}>
        <Text style={styles.text}>Indian</Text>
        </Pressable>

        <Pressable style={styles.button}>
        <Text style={styles.text}>Indian</Text>
        </Pressable>

        <Pressable style={styles.button}>
        <Text style={styles.text}>Indian</Text>
        </Pressable>
          

        </ScrollView>
      </View>

      <View>
        <Text style={{margin:20, fontSize: 20}}>
          Popular Dishes
        </Text>
      </View>


      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{display:'flex', flexDirection:'row'}}>
        <View style={{display:'flex', alignItems:'center'}}>
          <View style={styles.circle}>
            <Image style={styles.img} source={require('./assets/MuttonBiryani.jpg')}/>
          </View>
          <Text>Biryani</Text>
        </View>

        <View style={{display:'flex', alignItems:'center'}}>
          <View style={styles.circle}>
            <Image style={styles.img} source={require('./assets/MuttonBiryani.jpg')}/>
          </View>
          <Text>Biryani</Text>
        </View>

        <View style={{display:'flex', alignItems:'center'}}>
          <View style={styles.circle}>
            <Image style={styles.img} source={require('./assets/MuttonBiryani.jpg')}/>
          </View>
          <Text>Biryani</Text>
        </View>

        <View style={{display:'flex', alignItems:'center'}}>
          <View style={styles.circle}>
            <Image style={styles.img} source={require('./assets/MuttonBiryani.jpg')}/>
          </View>
          <Text>Biryani</Text>
        </View>


      </View>
      </ScrollView>


      <View style={{borderColor:'#e9ecef', borderWidth:4, marginTop: 20}}>

      </View>

      <View style={{display:'flex', flexDirection:'row', margin: 10}}>
        <Text style={{fontSize:21, marginTop: 5, fontWeight:'bold'}}>Recommended</Text>
        <AntDesign name='caretdown' style={{ color: 'black', fontSize: 15, marginLeft: 10, marginTop: 10}}/>
        <Pressable style={{ backgroundColor:'black',width:60, height:30, borderRadius:4, alignItems:'center', justifyContent:'center', marginLeft: 150, marginTop: 7}}>
          <Text style={{color:'white', fontSize: 16}}>Menu</Text>
        </Pressable>
      </View>


      <View>
        
      </View>
      


      <FoodItems/>


      
      <Carticon/>
    </View>

    






    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#e9ecef',
    marginLeft: 20,
    marginTop: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'grey',
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'red',
    alignItems:'center',
    justifyContent:'center',
    marginLeft: 20
  },
  img:{
    height: 90,
    width: 90,
    borderRadius: 50,
  }
  
});

