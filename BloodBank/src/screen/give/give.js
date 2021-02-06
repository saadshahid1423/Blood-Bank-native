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
  import database from '@react-native-firebase/database';

class Give extends React.Component{
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = {
          completeDetail: [
          ]
        };
      }
    componentDidMount() {
        var arr = []
        database().ref('/').child("donerinfo").on("child_added",   (data)=> {
          arr.push(data.val())
          this.setState({
            completeDetail: arr
          })
        })
      }
    move_detail=(i)=>{
        this.props.navigation.navigate("Givedetail",{details: i})
    }
    render(){
        return(
            <View style={{backgroundColor:"#8a0303",flex:1}}>
                <Text style={{color:"white",fontSize:50,textAlign:"center",marginTop:50,fontWeight:"bold"}}>List Of Donors</Text>
                <ScrollView>
                {this.state.completeDetail.map((i,v)=>{
                    // console.log(this.state.completeDetail)
          return(
                <View style={{borderRadius:15,backgroundColor:"white",height:60,marginTop:30}}>
                    <View>
                    <Text style={{marginLeft:15,marginTop:10,fontSize:15,fontWeight:"bold",color:"#8a0303"}}>Name:</Text>
                    <Text style={{marginLeft:15,fontSize:15,fontWeight:"bold",color:"#8a0303"}} key={v}>{i.DonerName}</Text>
                    </View>
                    <View style={{marginLeft:110,marginTop:-40}}>
                    <Text style={{marginLeft:15,fontSize:15,fontWeight:"bold",color:"#8a0303"}}>Blood Group:</Text>
                    <Text style={{marginLeft:15,fontSize:15,fontWeight:"bold",color:"#8a0303"}} key={v}>{i.BloodGroup}</Text>
                    </View>
                    <View style={{marginLeft:290,marginTop:-45}}>
                        <TouchableOpacity onPress={()=>this.move_detail(i)}>
                            <Image style={{height:50,width:50}} source={require("../../images/forward.png")}/>
                        </TouchableOpacity>
                    </View>
                </View>
          )
        })}
                </ScrollView>
            </View>
        );
    };
};
export default Give;