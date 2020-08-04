import React, { Component } from 'react';
import {Container, Header, Button,Content, Left, Right, Body, Title,Icon,Text,Tab, Tabs,TabHeading,Drawer} from 'native-base';
import {Scene, Stack, Router} from 'react-native-router-flux';
import AirForce from './af.js';
import AirForceEnlisted from './afenlisted.js';

export default class AFMenu extends Component {
  render(){
    return(
      <Container>
        <Router hideNavBar>
          <Stack key="root" hideNavBar>
            <Scene key="afhome" component={AirForce}/>
            <Scene key="afenlisted" component={AirForceEnlisted}/>
          </Stack>
        </Router>
      </Container>
    );
  }
}
