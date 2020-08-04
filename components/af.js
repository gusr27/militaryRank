import React, { Component } from 'react';
import {Container, Content, Left, Body, Title,Text,ListItem, List,Thumbnail} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {TouchableOpacity, StyleSheet,ImageBackground, Image,View, Dimensions} from 'react-native';

import AFMenu from './asmenu.js';
import NavBar from './NavBar.js';
import Images from '@images/images';
export default class AirForce extends Component {
  render(){
      let {height, width} = Dimensions.get('window');
    return(
        
         
        <Container>
      
            
             <Content>
                 <Text style={{textAlign:"center"}}>United States Air Force</Text>
                 <List>
                    <ListItem thumbnail onPress= {() => {Actions.afenlisted(); }}>
                        <Left>
                            <Thumbnail resizeMode={"contain"} source={Images.AF[0].ranks[0]}/>
                        </Left>
                        
                        <Body>
                            <Text style={styles.text}>Enlisted</Text>
                            <Text note>Tap to see enlisted</Text>
                        </Body>
                    </ListItem> 
                     <ListItem thumbnail>
                         <Left>
                            <Thumbnail square resizeMode={"contain"} source={Images.AF[1].ranks[0]}/>
                        </Left>
                         
                        <Body>
                            <Text style={styles.text}>Officers</Text>
                            <Text note>Tap to see officers</Text>
                        </Body>
                    </ListItem> 
                  </List>
            </Content>
             
        </Container>
          
     
    );
  }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "white"
    },
    backgroundI:{
        flex:1,
        color: 'black',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',

        
    },
    text:{
        color: 'black',
        fontSize: 30,
    fontWeight: "bold"
    }
})
