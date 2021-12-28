import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image
} from 'react-native';
import {Flatlist} from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import PostCard from './PostCard';

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          posts:[]
        };
      }

      fetchPosts = () => {
        firebase
          .database()
          .ref("/posts/")
          .on("value", snapshot => {
            let posts=[]
            if(snapshot.val()){
              Object.keys(snapshot.val()).forEach(function(key){
                posts.push({
                  key:key,
                  value:snapshot.val()[key]
                })
              })
            }
            this.setState({
              posts:posts
            })
            this.props.setUpdate();
          },
          function(error){
            console.log("THE READ FAILED");
          }
          );
      }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require("../assets/assets/logo.png")} style={styles.iconImage}></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <Flatlist
                         keyExtractor={this.keyExtractor}
                         data={posts}
                         renderItem={PostCard}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contaier:{
        flex:1,
        backgroundColor:"black"
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle:{
        flex:0.07,
        flexDirection:"row"
    },
    appIcon:{
        flex:0.2,
        justifyContent:"center",
        alignItems:"center"
    },
    iconImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:"center"
    },
    appTitleText:{
        color:"white",
        fontSize:RFValue(28)
    },
    cardContainer:{
        flew:0.85
    }
})