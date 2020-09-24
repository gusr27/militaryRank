import * as React from 'react';
import {Image,StyleSheet} from 'react-native';
import {Tab, Tabs,TabHeading,Text} from 'native-base';

import AFMenu from './asmenu.js';
import Navy from './navy.js';
import Images from '@images/images';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class NavBar extends React.Component{
  render(){
    return (

          <Tabs tabBarUnderlineStyle= {{backgroundColor:'black'}}>
            <Tab heading={ <TabHeading><Image source={Images.AFLogo} style={styles.logo}/><Text style={{color:"#00369E"}}>AF</Text></TabHeading>} underlineStyle={{backgroundColor:"#00369E"}}>
              <AFMenu/>
            </Tab>
            <Tab heading={ <TabHeading><Image source={Images.ArmyLogo} style={styles.logo}/><Text style={{color:"black"}}>ARMY</Text></TabHeading>}>

            </Tab>
            <Tab heading={ <TabHeading><Image source={Images.NavyLogo} style={styles.logo}/><Text style={styles.navyText}>NAVY</Text></TabHeading>}>
                <Navy/>
            </Tab>
            <Tab heading={<TabHeading><Image source={Images.MarineCorpsLogo} style={styles.logo}/><Text style={{color:"#CC101F"}}>USMC</Text></TabHeading>} >

            </Tab>
            <Tab heading={<TabHeading><Image source={Images.AFLogo} style={styles.logo}/><Text style={{color:"#242365"}}>USCG</Text></TabHeading>}>

            </Tab>
          </Tabs>

    );
  }
}

const styles = StyleSheet.create({
    logo:{
        width: 20,
        height: 20

    },

    navyText:{
        color: "#000066"
    }
});
