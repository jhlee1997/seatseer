import React, {useState} from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

export default function Help() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Help</Text>
        <Text>TBC</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
      },
})