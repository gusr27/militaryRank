import React, { Component } from 'react';
import {Container, Header, Button,Content, Left, Right, Body, Title,Icon,Text,Tab, Tabs,TabHeading,Drawer} from 'native-base';
import {Scene, Stack, Router} from 'react-native-router-flux';
import Navy from './navy.js';

export default class NMenu extends Component {
  render(){
    return(
      <Container>
        <Router hideNavBar>
          <Stack key="root" hideNavBar>
            <Scene key="navy" component={Navy}/>
          </Stack>
        </Router>
      </Container>
    );
  }
}