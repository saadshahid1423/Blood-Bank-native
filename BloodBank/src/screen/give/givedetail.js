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

class Givedetail extends React.Component{
    constructor(props) {
        super(props);
        // console.log(this.props.)
        this.state = {
            details:[
                this.props.route.params
            ]
        };
      }
      render(){
        // console.log("props==>" , this.props.route.params)
        return(
            <View style={{flex:1,backgroundColor:"#8a0303"}}>
            <ScrollView>
            {this.state.details.map((v)=>{
            console.log(v)
        return(
                <View style={{backgroundColor:"white",borderRadius:15,marginTop:160,marginLeft:10,marginRight:10}}>
                    <Text style={{textAlign:"center",fontSize:50,color:"#8a0303",fontWeight:"bold"}}>Doner Details</Text>
                    <Text style={{marginTop:35,marginLeft:25,fontWeight:"bold",color:"#8a0303",fontSize:15}}>Name: {v.details.DonerName}</Text>
                    <Text style={{marginTop:35,marginLeft:25,fontWeight:"bold",color:"#8a0303",fontSize:15}}>Father Name: {v.details.Fathername}</Text>
                    <Text style={{marginTop:35,marginLeft:25,fontWeight:"bold",color:"#8a0303",fontSize:15}}>City: {v.details.Place}</Text>
                    <Text style={{marginTop:35,marginLeft:25,fontWeight:"bold",color:"#8a0303",fontSize:15}}>Phone: {v.details.MobileNumber}</Text>
                    <Text style={{marginTop:35,marginLeft:25,fontWeight:"bold",color:"#8a0303",fontSize:15}}>Blood Group: {v.details.BloodGroup}</Text>
                    <Text style={{marginTop:35,marginLeft:25,fontWeight:"bold",color:"#8a0303",fontSize:15,paddingBottom:30}}>Disease: {v.details.Diseas}</Text>
                </View>
         )
            })} 
            </ScrollView>
            </View>
        );
    };
}
export default Givedetail;