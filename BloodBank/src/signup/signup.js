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
// import Fade from 'react-reveal/Fade';

class Login extends React.Component {
    send_data = () => {
        auth()
        .signInWithEmailAndPassword(this.state.Email, this.state.Password)
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
        })

    }
    render() {
        const login_page = () => {
            this.props.navigation.navigate("Login")
        }
        return (
            <View style={{ backgroundColor: "#8a0303", flex: 1 }}>
                <ScrollView>
                    <View style={{ backgroundColor: "white", marginTop: 140, borderRadius: 15, marginLeft: 30, marginRight: 30 }}>
                        <Text style={{ fontSize: 50, textAlign: "center", marginTop: 50, color: "#8a0303" }}>Signup</Text>
                        <TextInput style={{ width: 250, marginLeft: 20, marginTop: 30 }} keyboardType="email-address" placeholder="Enter Email" />
                        <TextInput style={{ width: 250, marginLeft: 20 }} secureTextEntry={true} placeholder="Enter Password" />
                        <TouchableOpacity onPress={() => this.send_data()} style={{ width: 80, height: 30, backgroundColor: "#8a0303", marginLeft: 115, marginTop: 50, borderRadius: 15, marginBottom: 15 }}>
                            <Text style={{ textAlign: "center", color: "white", marginTop: 5 }}>Signup</Text>
                        </TouchableOpacity>
                        <Text style={{ marginTop: 15, textAlign: "center" }}>Not have an account? <TouchableOpacity onPress={() => login_page()}><Text style={styles.signup}>Login</Text></TouchableOpacity></Text>
                        {/* <Button style={styles.btn} onPress={()=>send_data} title="Login"></Button> */}
                    </View>
                </ScrollView>
            </View>
            // <Text style={{marginTop:30,color:'black'}}>HEllo</Text>
        );
    };
};

const styles = StyleSheet.create({
    signup: {
        color: "rgb(6,69,173)"
    }
})

export default Login;