import * as React from 'react';
import { View, Text, StatusBar, Linking } from 'react-native';
import { Button } from 'react-native-paper';

export default function ContactsScreen({ navigation }) {
    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , flexDirection: 'column'}}>
            <View>
                <Button style={{backgroundColor: 'green', width: 200}} icon="phone" mode="contained"  onPress = {()=>Linking.openURL('tel: +1 323 847 4121')}>Call</Button>
            </View>
            <View  style={{ paddingTop: 30}}>
                <Button style={{backgroundColor: 'brown', width: 200}} icon="email" mode="contained"  onPress = {()=>Linking.openURL('mailto:redamanw@gmail.com')}>Email</Button>
            </View>
            <View  style={{ paddingTop: 30}}>
                <Button style={{backgroundColor: '#8a3ab9', width: 200}} icon="instagram" mode="contained"  onPress = {()=>Linking.openURL('https://www.instagram.com/amunigk/?hl=en')}>Instagram</Button>
            </View>
            <View  style={{ paddingTop: 30}}>
                <Button style={{backgroundColor: 'skyblue', width: 200}} icon="linkedin" mode="contained"  onPress = {()=>Linking.openURL('https://www.linkedin.com/in/amanuel-reda/')}>LinkedIn</Button>
            </View>
            <View  style={{ paddingTop: 30}}>
                <Button style={{borderColor: 'white', borderWidth: 1, backgroundColor: 'black', width: 200}} icon="github" mode="contained"  onPress = {()=>Linking.openURL('https://www.linkedin.com/in/amanuel-reda/')}>GitHub</Button>
            </View>
        </View>
    );
}