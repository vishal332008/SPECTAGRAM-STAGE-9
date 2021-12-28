import React , {Component} from 'react';
import {View , ActivityIndicator} from 'react-native';
import firebase from "firebase";

export default class LoadingScreen extends Component{
    
    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate("DashboardScreen");
            }else{
                this.props.navigation.navigate("LoginScreen");
            }
        })
    }

    componentDidMount(){
        this.checkIfLoggedIn();
    }
    
    
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
}