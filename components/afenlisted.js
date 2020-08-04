import React, { Component } from 'react';
import {Container, Content, Left, Header, Body, Card,Grid, CardItem,Row, Col,Title,Text,ListItem, List,Icon,Thumbnail, Button} from 'native-base';
import { Router, Scene, Stack,Actions} from 'react-native-router-flux';
import {TouchableOpacity, StyleSheet,ImageBackground, Image,View, Dimensions} from 'react-native';

import AFMenu from './asmenu.js';
import NavBar from './NavBar.js';
import Images from '@images/images';
export default class AirForceEnlisted extends Component {
  render(){
      let {height, width} = Dimensions.get('window');
    return(
        
         
        <Container>
            <Button iconLeft light style={{alignSelf: 'flex-start'}} onPress={ () => Actions.pop() }>
                    <Icon name="arrow-back"/> 
                    <Text>Back</Text>
                </Button>
                 
                 <Text style={{textAlign:"center"}}>United States Air Force Enlisted Ranks</Text>
            <Grid>
                <Row>
                    <Col>
                        
                              
                                <Image square resizeMode={"contain"} style={{height: 150, width: 150}}  source={Images.AF[0].ranks[0]}/>

                         

                    </Col>
                    <Col>
                         <Image square resizeMode={"contain"} style={{height: 150, width: 150}}  source={Images.AF[0].ranks[0]}/>
                    </Col>
                </Row>
                <Row style={{paddingTop: 50}}>
                    <Col>
                        <Card>
                            <CardItem>
                              <Body>
                                <Text>
                                   //Your text here
                                </Text>
                              </Body>
                            </CardItem>
                          </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardItem>
                              <Body>
                                <Text>
                                   //Your text here
                                </Text>
                              </Body>
                            </CardItem>
                          </Card>
                    </Col>
                </Row>
            </Grid>
            
             
        </Container>
          
     
    );
  }
}

