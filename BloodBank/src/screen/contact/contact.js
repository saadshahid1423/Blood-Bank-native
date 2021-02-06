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
import SelectInput from 'react-native-select-input-ios';

class Contact extends React.Component{
    render(){
        const options = [{ value: "Select Problem", label: 'Select Problem' },{ value: "Report Bug", label: 'Report Bug' },{ value: "Report User", label: 'Report User' },{ value: "Any other information from user", label: 'Any other information from user' },{ value: "Other", label: 'Other' }]
        return(
            <View style={{flex:1,backgroundColor:"#8a0303"}}>
            <ScrollView>
                <View style={{backgroundColor:"white",borderRadius:15,marginTop:200,marginLeft:10,marginRight:10}}>
                    <Text style={{textAlign:"center",fontSize:50,color:"#8a0303",fontWeight:"bold"}}>Contact Us</Text>
                    <TextInput style={{marginLeft:25,marginTop:20,width:250}} placeholder="Enter your Name" />
                    <TextInput style={{marginLeft:25,marginTop:10,width:250}} placeholder="Enter your Email" />
                    <SelectInput style={{width:250,marginLeft:20,marginTop:10}} value={0} options={options} />
                    <TextInput style={{marginLeft:25,marginTop:10,width:250}} placeholder="Define Your Problem Briefly" />
                </View>
            </ScrollView>
            </View>
        );
    };
};
export default Contact;