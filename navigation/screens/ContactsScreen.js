import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function ContactsScreen({ navigation }) {
    return (
        <View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Contact Screen</Text>
        </View>
        </View>
    );
}