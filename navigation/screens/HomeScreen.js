
import * as React from 'react';
import { Image, View, Text, StatusBar, Linking } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen({ }) {
    const routeRedirect = () =>{
      Linking.openURL('https://www.amanuelreda.me/');
    }
    return (
        <SafeAreaView
            style={{
                 flex: 1,
                 backgroundColor: 'black',
                 paddingTop: 100
                }}
            >
            <View style={{ 
                flex: 1,
                flexDirection: 'row',
                paddingLeft: 20,
                paddingRight: 20
                }}>
                <View style={{ 
                flex: 1}}
                >
                    <Image
                            source={require('../screens/images/perry.png')}
                            style={{
                            width: 150,
                            height: 150,
                            borderRadius: 75,
                            overflow: 'hidden',
                            borderWidth: 3,
                            borderColor: 'green',
                            alignItems: 'center'
                            }}
                        />
                </View>
                <View style={{ 
                flex: 1,
                flexDirection: 'column',
                paddingTop: 25
                }}
                >
                    
                    <Text
                        style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}
                    > Amanuel Reda </Text>
                    <Text
                        style={{paddingTop:10, fontSize: 12, fontWeight: 'bold', color: 'white' }}
                    > Hi Yall, I am a SEA scholar. Currently, I am learning how to build cross platform Apps using React Native</Text>
                </View>
                
                
            </View>
            
            <View style={{ 
                flex: 1,
                flexDirection: 'row',
                paddingTop: 100,
                
                alignItems: 'center',
                justifyContent: 'center' 
                }}>
                <View>
                        <Image
                            source={require('../screens/images/edu.png')}
                            style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            overflow: 'hidden',
                            borderWidth: 3,
                            borderColor: 'green',
                            alignItems: 'center'
                            }}
                        />
                </View>
                <View>
                    <Text
                        style={{paddingLeft: 10, paddingTop:10, fontSize: 18, color: 'blue', textAlign:'left' }}
                    >Santa Monica College</Text>
                    <Text
                        style={{ paddingLeft: 15, paddingTop:20, fontSize: 16, color: 'gold', textAlign:'left' }}
                    >CSULB</Text>
                </View>
            </View>

            <View style={{ 
                flex: 1,
                flexDirection: 'row',
                paddingTop: 50,

                alignItems: 'center',
                justifyContent: 'center'
                }}>
                <View>
                    <Image
                                source={require('../screens/images/progLogo.png')}
                                style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50,
                                overflow: 'hidden',
                                borderWidth: 3,
                                borderColor: 'green',
                                alignItems: 'center'
                                }}
                            />
                </View>
                <View>
                    <Text
                        style={{paddingLeft: 15, paddingTop:10, fontSize: 16, color: 'gold', textAlign:'left' }}
                    >Computer Science Tutor</Text>
                    <Text
                        style={{paddingLeft: 15, paddingTop:20, fontSize: 16, color: 'yellow', textAlign:'left' }}
                    >SnapEngineeringAcademy</Text>
                </View>
            </View>
            <View style={{ 
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center'
                }}>
                <Button icon="link" mode="contained" onPress={routeRedirect}>
                    Portfolio
                </Button>
            </View>
        </SafeAreaView>
    );
}