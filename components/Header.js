import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todo App</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height:80,
        paddingTop:45,
        backgroundColor:'coral'
    },
    title:{
        color:"white",
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    }
});