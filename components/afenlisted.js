import React, { useState, Component }from 'react';
import {Container, Content, Left, Header, Body, Card,Grid, CardItem,Row, Col,Title,Text,ListItem, List,Icon,Thumbnail, Button} from 'native-base';
import { Router, Scene, Stack,Actions} from 'react-native-router-flux';
import {TouchableOpacity, TouchableHighlight,StyleSheet,ImageBackground, Image,View, Dimensions, Modal} from 'react-native';
import enlistedData from './AirForceList.json';
import AFMenu from './asmenu.js';
import NavBar from './NavBar.js';
import Images from '@images/images';


class AirForceEnlisted extends Component{
    constructor(props){
        super(props);
        this.state={
            modalTitle:"Airman2",
            modalImage:"",
            modalVisible:false,
            setModalVisible:false
        }

    }

    changeModal(){
        this.setState((state,props) => ({
            modalVisible: !state.modalVisible
        }))
    }

    render(){
         let {height, width} = Dimensions.get('window');

    return(


        <Container style={{height: "100%"}}>
            <Button iconLeft light style={{alignSelf: 'flex-start'}} onPress={ () => Actions.pop() }>
                    <Icon name="arrow-back"/>
                    <Text>Back</Text>
                </Button>

                 <Text style={{textAlign:"center"}}>United States Air Force Enlisted Ranks</Text>
            <Grid >
                <Row>
                    <Col>

                              <TouchableOpacity onPress={() => {
                this.changeModal();
                this.setState({modalTitle: enlistedData[0].title, modalImage:Images.AF[0].ranks[0]})
              }}>
                            <Image square resizeMode={"contain"} style={{height: 100, width: 100}}  source={Images.AF[0].ranks[0]} />
                        </TouchableOpacity>




                    </Col>
                    <Col><TouchableOpacity onPress={() => {
      this.changeModal();
      this.setState({modalTitle: enlistedData[1].title, modalImage:Images.AF[0].ranks[1]})
    }}>
                         <Image square resizeMode={"contain"} style={{height: 100, width: 100}}  source={Images.AF[0].ranks[1]}/>
                        </TouchableOpacity>
                    </Col>

                </Row>
                <Row style={{paddingTop: 50}}>
                    <Col>
                    <TouchableOpacity onPress={() => {
      this.changeModal();
      this.setState({modalTitle: enlistedData[2].title, modalImage:Images.AF[0].ranks[2]})
    }}>
                         <Image square resizeMode={"contain"} style={{height: 100, width: 100}}  source={Images.AF[0].ranks[2]}/>
                        </TouchableOpacity>

                    </Col>
                    <Col>
                    <TouchableOpacity onPress={() => {
      this.changeModal();
      this.setState({modalTitle: enlistedData[3].title, modalImage:Images.AF[0].ranks[3]})
    }}>
                         <Image square resizeMode={"contain"} style={{height: 100, width: 100}}  source={Images.AF[0].ranks[3]}/>
                        </TouchableOpacity>
                    </Col>
                </Row>
                <Row style={{paddingTop: 50}}>
                    <Col>
                    <TouchableOpacity onPress={() => {
      this.changeModal();
      this.setState({modalTitle: enlistedData[4].title, modalImage:Images.AF[0].ranks[4]})
    }}>
                         <Image square resizeMode={"contain"} style={{height: 100, width: 100}}  source={Images.AF[0].ranks[4]}/>
                        </TouchableOpacity>

                    </Col>
                    <Col>
                    <TouchableOpacity onPress={() => {
      this.changeModal();
      this.setState({modalTitle: enlistedData[5].title, modalImage:Images.AF[0].ranks[5]})
    }}>
                         <Image square resizeMode={"contain"} style={{height: 100, width: 100}}  source={Images.AF[0].ranks[5]}/>
                        </TouchableOpacity>
                    </Col>
                </Row>
            </Grid>
             <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}

      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{this.state.modalTitle}</Text>
              <Image square resizeMode={"contain"} style={{height: 150, width: 150}}  source={this.state.modalImage}/>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                this.changeModal();
              }}
            >

              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>

          </View>
        </View>
      </Modal>




        </Container>


          );
    }
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default AirForceEnlisted;
