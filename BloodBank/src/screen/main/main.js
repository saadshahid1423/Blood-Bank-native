import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TextInput,
    TouchableOpacity,
    Touchable,
    Image,
  } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Main extends React.Component{
    render(){
        const Donate=()=>{
            this.props.navigation.navigate("Donate")
        }
        const Give=()=>{
            this.props.navigation.navigate("Give")
        }
        const Contact=()=>{
            this.props.navigation.navigate("Contact")
        }
        return(
            <View style={{flex:1,justifyContent:"center",backgroundColor:"#8a0303"}}>
                <ScrollView>
                <View style={{flex:1,justifyContent:"center",alignContent:"center",alignItems:"center",marginTop:50}}>
                <Image style={{backgroundColor:"white",borderRadius:60}} source={require('../../images/logo.png')} />
                </View>
                <View style={{height:100,flexDirection:"row",alignItems:'center',marginBottom:100,marginTop:300}}>
                <View style={{height:120,width:100,backgroundColor:"white",borderRadius:15,marginLeft:5,flex:1,justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity onPress={()=>Donate()} style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Image source={require("../../images/donateblood.png")} style={{width:50,height:50}} />
                <Text style={{color:"#8a0303",fontWeight:"bold"}} >Donate Blood</Text>
                </TouchableOpacity>
                </View>
                <View style={{height:120,width:100,backgroundColor:"white",borderRadius:15,marginLeft:5,marginRight:5,flex:1,justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity onPress={()=>Give()} style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Image source={require("../../images/hand.png")} style={{width:50,height:50}} />
                <Text style={{color:"#8a0303",fontWeight:"bold"}} >Want Blood</Text>
                </TouchableOpacity>
                </View>
                <View style={{height:120,width:100,backgroundColor:"white",borderRadius:15,marginRight:5,flex:1,justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity onPress={()=>Contact()} style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Image source={require("../../images/contact.png")} style={{width:50,height:50}} />
                    <Text style={{color:"#8a0303",fontWeight:"bold"}} >Contact Us</Text>
                </TouchableOpacity>
                </View>
            </View>
                </ScrollView>
            </View>
        );
    };
};
export default Main;