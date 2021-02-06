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
import database from '@react-native-firebase/database';

class Donate extends React.Component{
  constructor(props){
    super(props)
    this.state={
        FullName:"",FatherName:"",Email:"",PhoneNumber:"",City:"",MedicalInput:"",NicNumber:"",Bloodgrp:0,Gender:0,Region:0
    }
  }

  donate_data = () =>{
    if (this.state.FullName.trim() === "") {
      this.setState(() => ({ nameError: "Fill above feild." }));
    }    else if (this.state.FatherName.trim() === "" ) {
      this.setState(() => ({ nameError: "Fill above feild." }));
    }else if (this.state.Email.trim() === "" ) {
      this.setState(() => ({ nameError: "Fill above feild." }));
    }else if (this.state.PhoneNumber.trim() === "" ) {
      this.setState(() => ({ nameError: "Fill above feild." }));
    }else if (this.state.City.trim() === "" ) {
      this.setState(() => ({ nameError: "Fill above feild." }));
    } else if (this.state.MedicalInput.trim() === "" ) {
      this.setState(() => ({ nameError: "Fill above feild." }));
    }else if (this.state.NicNumber.trim() === "" ) {
      this.setState(() => ({ nameError: "Fill above feild." }));
    }else {
      let PersonalInfo={
        DonerName:this.state.FullName,
        Fathername:this.state.FatherName,
        Mail:this.state.Email,
        MobileNumber:this.state.PhoneNumber,
        Place:this.state.City,
        Diseas:this.state.MedicalInput,
        IdentityCard:this.state.NicNumber,
        BloodGroup:this.state.Bloodgrp,
        GenderWrite:this.state.Gender,
        Regionslect:this.state.Region
      }
      console.log("personaldata===>",PersonalInfo)
      this.setState(() => ({ nameError: null }));
      database().ref('/').child('donerinfo').push(PersonalInfo)
                  .then((success)=>{
                  console.log(success,'success')
                  this.setState(() => ({ send: "Submitted Go Back" }));
                  })
                  .catch((err)=>{
                      console.log(err,'err')
                  })
    }
  }
  render(){
      const go_back=()=>{
        this.props.navigation.navigate("Main")
      }
        const options = [{ value: "Select Blood Group", label: 'Select Blood Group' },{ value: "A+", label: 'A+' },{ value: "A-", label: 'A-' },{ value: "B+", label: 'B+' },{ value: "B-", label: 'B-' },{ value: "O+", label: 'O+' },{ value: "O-", label: 'O-' },{ value: "AB+", label: 'AB+' },{ value: "AB-", label: 'AB-' }]
        const select = [{ value: "Select Gender", label: 'Select Gender' },{ value: "Male", label: 'Male' },{ value: "Female", label: 'Female' },{ value: "Others", label: 'Others' }]
        const city = [{ value: "Select Region", label: 'Select Region' },{ value: "Sindh", label: 'Sindh' },{ value: "Punjab", label: 'Punjab' },{ value: "Balochistan", label: 'Balochistan' },{ value: "Khyber Pakhton Khwa", label: 'Khyber Pakhton Khwa' }]
        return(
          <View style={{backgroundColor:"#8a0303",flex:1}}>
              <ScrollView>
            <View style={{backgroundColor:"white",marginTop:20,borderRadius:15,marginLeft:30,marginRight:30}}>
                <Text style={{fontSize:30,textAlign:"center",marginTop:50,color:"#8a0303"}}>Personal Detail</Text>
                <TextInput value={this.state.FullName} onChangeText={(e)=>this.setState({FullName:e})} style={{width:250,marginLeft:20,marginTop:30}} maxLength={15}  placeholder="Enter Full Name" req/>
                <TextInput value={this.state.FatherName} onChangeText={(e)=>this.setState({FatherName:e})} style={{width:250,marginLeft:20}} maxLength={15}  placeholder="Enter Father Name"/>
                <TextInput value={this.state.Email} onChangeText={(e)=>this.setState({Email:e})} style={{width:250,marginLeft:20}} keyboardType="email-address" placeholder="Enter Email"/>
                {/* <TextInput secureTextEntry={true} style={{width:250,marginLeft:20}} maxLength={8} placeholder="Enter Password(max 8 words)"/> */}
                <TextInput value={this.state.PhoneNumber} onChangeText={(e)=>this.setState({PhoneNumber:e})} style={{width:250,marginLeft:20}} maxLength={11} keyboardType="phone-pad" placeholder="Enter Phone Number"/>
                <SelectInput onSubmitEditing={(e)=>this.setState({Bloodgrp:e})} value={this.state.Bloodgrp} style={{width:250,marginLeft:20}} value={0} options={options} />
                <SelectInput onSubmitEditing={(e)=>this.setState({Gender:e})} value={this.state.Gender} style={{width:250,marginLeft:20}} value={0} options={select} />
                <SelectInput onSubmitEditing={(e)=>this.setState({Region:e})} value={this.state.Region} style={{width:250,marginLeft:20}} value={0} options={city} />
                <TextInput value={this.state.City} onChangeText={(e)=>this.setState({City:e})} style={{width:250,marginLeft:20}} placeholder="Enter CIty"/>
                <TextInput value={this.state.MedicalInput} onChangeText={(e)=>this.setState({MedicalInput:e})} style={{width:250,marginLeft:20}} placeholder="Any Medical Diseas"/>
                <TextInput value={this.state.NicNumber} onChangeText={(e)=>this.setState({NicNumber:e})} style={{width:250,marginLeft:20}} keyboardType="number-pad" placeholder="NIC Number"/>
                {!!this.state.nameError && (<Text style={{ color: "red",marginLeft:20 }}>{this.state.nameError}</Text>)}
                <TouchableOpacity onPress={()=>this.donate_data()} style={{height:30,width:80,backgroundColor:"#8a0303",marginLeft:115,marginTop:20,borderRadius:15,marginBottom:20}}>
                    <Text style={{textAlign:"center",color:"white",justifyContent:"center",marginTop:5}}>Submit</Text>
                </TouchableOpacity>
                {!!this.state.send && (<TouchableOpacity onPress={()=>go_back()}><Text style={{ color: "#0645AD",textAlign:"center" }}>{this.state.send}</Text></TouchableOpacity>)}
                {/* <Text style={{marginTop:15,textAlign:"center"}}>Already have an account? <TouchableOpacity onPress={()=>signup_page()}><Text style={styles.signup}>Signup</Text></TouchableOpacity></Text> */}
                {/* <Button style={styles.btn} onPress={()=>send_data} title="Login"></Button> */}
            </View>
        </ScrollView>
            </View>
        );
    };
};
// const styles = StyleSheet.create({
//     donate:{
//         backgroundColor:"#8a0303",
//         height:500
//     }
// })
export default Donate;