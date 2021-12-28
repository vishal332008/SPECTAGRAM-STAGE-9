import React , {Component} from 'react';
import {View, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class LoginScreen extends Component{
    
    signInWithGoogleAsync = async () => {
        try{
            const result = await Google.loginAsync({
                behaviour:"web",
                androidClientId:"701303377808-av2dl5u9qjebikipdvdgb6dpji0o910p.apps.googleusercontent.com",
                iosClientId:"701303377808-l0qfniph96qc62rv9542koff9dk8thbq701303377808-l0qfniph96qc62rv9542koff9dk8thbq.apps.googleusercontent.com",
                scopes:['profile','email'],
            })
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <Image source={require("../assets/assets/logo.png")}
                    style={styles.appIcon}></Image>
                    <Text style={styles.appTitleText}>SPECTAGRAM</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={()=>this.signInWithGoogleAsync()}>
                        <Image source={require("../assets/assets/google_icon.png")}
                        style={styles.googleIcon}></Image>
                        <Text style={styles.googleText}>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
      },
      appTitle: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center"
      },
      appIcon: {
        width: RFValue(130),
        height: RFValue(130),
        resizeMode: "contain"
      },
      appTitleText: {
        color: "white",
        textAlign: "center",
        fontSize: RFValue(40),
        fontFamily: "Bubblegum-Sans"
      },
      buttonContainer: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
      },
      button: {
        width: RFValue(250),
        height: RFValue(50),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: RFValue(30),
        backgroundColor: "white"
      },
      googleIcon: {
        width: RFValue(30),
        height: RFValue(30),
        resizeMode: "contain"
      },
      googleText: {
        color: "black",
        fontSize: RFValue(20),
        fontFamily: "Bubblegum-Sans"
      }
})