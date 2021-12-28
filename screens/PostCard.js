import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      post_id:this.props.post.key,
      post_data:this.props.post.value
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    //no need of light and dark theme
    return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.authorContainer}>
             <View style={styles.authorImagecontainer}>
              <Image source={require("../assets/assets/profile_img.png")} 
              style={styles.profileImage}>
              </Image>
            </View>
                <View style={styles.AuthorNameContainer}>
                  <Text style={styles.AuthorNameText}>{this.props.post.author}</Text>
                </View>
                </View>
              <Image source={require("../assets/assets/post.jpeg")} style={styles.postImage}/>
              <View style={styles.captionContainer}>
                  <Text style={styles.captionText}>{this.props.post.caption}</Text>
              </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                  <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                  <Text style={styles.likeText}>LIKE</Text>
                </View>
              </View>
           </View>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
   cardContainer: { 
     margin: RFValue(13), 
     backgroundColor: "#2f345d",
      borderRadius: RFValue(20) 
    }, 
    authorImageContainer: { 
      resizeMode: "contain", 
      width: "95%", 
      alignSelf: "center",
      height: RFValue(250) 
    }, 
    AuthorNameContainer: {
      paddingLeft: RFValue(20), 
      justifyContent: "center"
    },
    authorNameText: { 
      fontSize: RFValue(25), 
      fontFamily: "Bubblegum-Sans", 
      color: "white"
    },
    captionContainer: { 
      fontFamily: "Bubblegum-Sans", 
      fontSize: 13, color: "white",
      paddingTop: RFValue(10)
    }, 
    actionContainer: { 
      justifyContent: "center", 
      alignItems: "center", 
      padding: RFValue(10) 
    }, 
    likeButton: { 
      width: RFValue(160), 
      height: RFValue(40), 
      justifyContent: "center", 
      alignItems: "center", 
      flexDirection: "row", 
      backgroundColor: "#eb3948", 
      borderRadius: RFValue(30) 
    }, 
    likeText: { 
      color: "white", 
      fontFamily: "Bubblegum-Sans", 
      fontSize: RFValue(25), 
      marginLeft: RFValue(5) 
    }
});
