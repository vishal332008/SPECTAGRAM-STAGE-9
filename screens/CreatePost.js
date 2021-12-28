import React, { Component } from 'react';
import { Text, View, Alert, SafeAreaView, Platform, StatusBar, Image, ScrollView, TextInput, Dimensions, StyleSheet, Button } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView, ScrollView } from 'react-native-web';
import DropDownPicker from "react-native-dropdown-picker";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          previewImage: "image_1",
          dropdownHeight: 40,

        };
      }
    
      async addPost(){
        if(this.state.caption){
          let postData={
            preview_image:this.state.previewImage,
            caption:this.state.caption,
            author:firebase.auth().currentUser.displayName,
            created_on:new Date(),
            author_uid:firebase.auth().currentUser.uid,
            profile_image:this.state.profile_image,
            likes:0
          }
         await firebase
         .database()
         .ref(
             "/posts/"+
             Math.random()
                 .toString(36)
                 .slice(2)
         )
         .set(postData)
         .then(function(snapshot){});
         this.props.setUpdateToTrue();
         this.props.navigation.navigate("Feed")
        }else{
          Alert.alert(
              "error",
              "ALL FIELDS ARE REQUIRED!",
              [{text:"OK",onPress:()=>{console.log("OK Pressed")}}],
              {cancelable:false}
          )
        }
      }

    render() {
          //no need of light and dark theme
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require("../assets/assets/logo.png")}
                               style={styles.iconImage}/>
                    </View>
                </View>
                <View style={stlyes.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>New Post</Text>
                </View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <Image source={preview_images[this.state.previewImage]}
                               style={styles.previewImage}/>
                        <View style={{height:RFValue(this.state.dropdownHeight)}}>
                            <DropDownPicker items={[
                                {label:"Image 1", value:"image_1"},
                                {label:"Image 2", value:"image_2"},
                                {label:"Image 3", value:"image_3"},
                                {label:"Image 4", value:"image_4"},
                                {label:"Image 5", value:"image_5"},
                                {label:"Image 6", value:"image_6"},
                                {label:"Image 7", value:"image_7"}
                            ]}

                            defaultValue={this.state.previewImage}

                            containerStyle={{
                                height:40,
                                borderRadius:20,
                                marginBottom:10
                            }}

                            onOpen={()=>{
                                this.setState({dropdownHeight:170});
                            }}

                            onClose={()=>{
                                this.setState({dropdownHeight:40});
                            }}

                            style={{backgroundColor:"transparent"}}

                            itemStyle={{
                                justifyContent:"flex-start"
                            }}

                            DropDownStyle={{backgroundColor:"#2a2a2a"}}

                            labelStyle={{
                                color:"white"
                            }}

                            arrowStyle={{
                                color:"white"
                            }}

                            onChangeItem={(item)=>{
                                this.setState({
                                    previewImage:item.value
                                })
                            }}
                            />
                        </View>
                        <TextInput style={styles.inputFont}
                                   onChangeText={(caption)=>{
                                       this.setState({
                                           caption:caption
                                       })
                                   }}

                                   placeholder={"Caption"}

                                   placeholderTextColor="white"
                                   />
                    </ScrollView>
                </View>
                <View style={styles.submitButton}>
            <Button onPress={()=>{this.addPost()}} title="SUBMIT" color="#841584"/>
          </View>
                <View style={{flex:0.08}}/>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    fieldsContainer: {
      flex: 0.85
    },
    previewImage: {
      width: "93%",
      height: RFValue(250),
      alignSelf: "center",
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: "contain"
    },
    inputFont: {
      height: RFValue(40),
      borderColor: "white",
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: "white",
      fontFamily: "Bubblegum-Sans"
    }
})