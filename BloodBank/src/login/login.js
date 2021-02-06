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
  } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'
import SelectInput from 'react-native-select-input-ios';
// import Fade from 'react-reveal/Fade';

class Login extends React.Component{
        constructor(props){
            super(props)
            this.state={
                UserName:"",Email:"",Password:"",PhoneNum:"",Bloodgrp:0,Gender:0
            }
        }

         send_data = () =>{
            //  this.setState(
            //      ()=>({})
            //  )
            if (this.state.UserName.trim() === "") {
                this.setState(() => ({ nameError: "Fill above feild." }));
              }else if (this.state.Email.trim() === "" ) {
                this.setState(() => ({ nameError: "Fill above feild." }));
              }else if (this.state.Password.trim() === "") {
                this.setState(() => ({ nameError: "Fill above feild." }));
            }else if (this.state.PhoneNum.trim() === "") {
                this.setState(() => ({ nameError: "Fill above feild." }));
            }
             else {
                auth()
                .createUserWithEmailAndPassword(this.state.Email, this.state.Password)
                .then(() => {
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }
              
                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }
                    
                    console.error(error);
                });
                
                var obj ={
                    Name:this.state.UserName,
                    Mail:this.state.Email,
                      Pass:this.state.Password,
                      Phone:this.state.PhoneNum,
                      BloodGroup:this.state.Bloodgrp,
                      GenderWrite:this.state.Gender
                      // Bloodgrp:this.state.BloodGroup
                    }
                    //   console.log("obj==>", obj)
                    this.setState(() => ({ nameError: null }));
                    console.log("personaldata===>",obj)
                    
                    database().ref('/').child('users').push(obj)
                    .then((success)=>{
                        console.log(success,'success')
                        this.props.navigation.navigate("Main") 
                    })
                  .catch((err)=>{
                      console.log(err,'err')
                  })
                 
              } 
              }

    render(){
        // console.log(this.state)
        const signup_page = () =>{
            this.props.navigation.navigate("Signup")
        }        

        const options = [{ value: "Select Blood Group", label: 'Select Blood Group' },{ value: "A+", label: 'A+' },{ value: "A-", label: 'A-' },{ value: "B+", label: 'B+' },{ value: "B-", label: 'B-' },{ value: "O+", label: 'O+' },{ value: "O-", label: 'O-' },{ value: "AB+", label: 'AB+' },{ value: "AB-", label: 'AB-' }]
        const select = [{ value: "Select Gender", label: 'Select Gender' },{ value: "Male", label: 'Male' },{ value: "Female", label: 'Female' },{ value: "Others", label: 'Others' }]
        return(
                <View style={{backgroundColor:"#8a0303",flex:1}}>
            <ScrollView>
                <View style={{backgroundColor:"white",marginTop:100,borderRadius:15,marginLeft:30,marginRight:30}}>
                    <Text style={{fontSize:50,textAlign:"center",marginTop:50,color:"#8a0303"}}>Login</Text>
                    <TextInput value={this.state.UserName} onChangeText={(e)=>this.setState({UserName:e})} style={{width:250,marginLeft:20,marginTop:30}} maxLength={15}  placeholder="Enter Name"/>
                    <TextInput value={this.state.Email} onChangeText={(e)=>this.setState({Email:e})} style={{width:250,marginLeft:20}} keyboardType="email-address" placeholder="Enter Email"/>
                    <TextInput value={this.state.Password} onChangeText={(e)=>this.setState({Password:e})} secureTextEntry={true} style={{width:250,marginLeft:20}} maxLength={8} placeholder="Enter Password(max 8 words)"/>
                    <TextInput value={this.state.PhoneNum} onChangeText={(e)=>this.setState({PhoneNum:e})} style={{width:250,marginLeft:20}} maxLength={11} keyboardType="number-pad" placeholder="Enter Phone Number"/>
                    <SelectInput onSubmitEditing={(e)=>this.setState({Bloodgrp:e})} style={{width:250,marginLeft:20}} value={this.state.Bloodgrp} options={options} />
                    <SelectInput onSubmitEditing={(e)=>this.setState({Gender:e})} value={this.state.Gender} style={{width:250,marginLeft:20}} value={0} options={select} />
                    {!!this.state.nameError && (<Text style={{ color: "red",marginLeft:20 }}>{this.state.nameError}</Text>)}
                    <TouchableOpacity onPress={()=>this.send_data()} style={{height:30,width:80,backgroundColor:"#8a0303",marginLeft:115,marginTop:50,borderRadius:15,}}>
                        <Text style={{textAlign:"center",color:"white",justifyContent:"center",marginTop:5}}>Login</Text>
                    </TouchableOpacity>
                    <Text style={{marginTop:15,textAlign:"center"}}>Already have an account? <TouchableOpacity onPress={()=>signup_page()}><Text style={styles.signup}>Signup</Text></TouchableOpacity></Text>
                    {/* <Button style={styles.btn} onPress={()=>send_data} title="Login"></Button> */}
                </View>
            </ScrollView>
                </View>
            // <Text style={{marginTop:30,color:'black'}}>HEllo</Text>
            );
    };
};

const styles = StyleSheet.create({
    signup:{
        color: "rgb(6,69,173)"
    }
})

export default Login;