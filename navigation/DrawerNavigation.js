import React , {Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from "../screens/Profile";
import TabNavigator from "./TabNavigator";
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
          light_theme: true
        };
    }
    
    componentDidMount() {
        let theme;
        firebase
          .database()
          .ref("/users/" + firebase.auth().currentUser.uid)
          .on("value", function(snapshot) {
            theme = snapshot.val().current_theme;
          });
        this.setState({ light_theme: theme === "light" ? true : false });
    }
    
    render(){
        return(
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={TabNavigator} options={{unmountOnBlur:true}}/>
                <Drawer.Screen name="Profile" component={Profile} options={{unmountOnBlur:true}}/>
                <Drawer.Screen name="Logout" component={Logout} options={{unmountOnBlur:true}}/>
            </Drawer.Navigator>
        )
    }
}
