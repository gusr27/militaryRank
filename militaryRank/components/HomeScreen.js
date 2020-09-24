import React, {Component} from 'react';
import {Container, Header, Button,Content, Left, Right, Body, Title,Icon,Text,Tab, Tabs,TabHeading} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import NavBar from './NavBar.js';

export default class HomeScreen extends Component{
  constructor(props){
      super(props);

  }

  render(){
    const navigation = this.props.navigation;
    return(
      <Container>
      <Header hasTabs>
        <Left>
          <Button
            transparent
            onPress={()=>navigation.openDrawer()}
            >
            <Icon name="menu"/>
          </Button>
        </Left>
        <Body>
          <Title>Miltary Ranks</Title>
        </Body>
        <Right>

        </Right>

      </Header>
      <NavBar/>
      </Container>
    )
  }
}
