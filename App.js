import * as React from 'react';
import {AppLoading} from 'expo';
import {Container, Header, Button,Content, Left, Right, Body, Title,Icon,Text,Tab, Tabs,TabHeading,Drawer} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StyleSheet, View } from 'react-native';
import { Router, Scene,Stack } from 'react-native-router-flux';
import AirForce from './components/af';
import NavBar from './components/NavBar.js';
import SideBar from './components/SideBar.js';
import {DrawerNavigator} from 'react-navigation';
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }




  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

    render() {
      if (!this.state.isReady) {
        return <AppLoading />;
      }

    return (
      <Container>
      <Header hasTabs>
      <Left>
        <Button
          transparent
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
      <Content>

      </Content>
      </Container>
    );
  }
}
