import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useSelector } from 'react-redux';
// import { Container, Header, Content, Button, Icon, Text } from 'native-base';


const Home = () => {
  const globalState = useSelector((state) => state);

    const [getUid, setUid] = useState({
        uid: '',
        name: '',
    });


    useEffect(() => {
        getFullName();
    })

    const getFullName = async () => {
        await AsyncStorage.getItem('fname')
        .then((result) => {
            setUid({
                name:result
            })
        }).done()
    }


    const getUserData = async () => {
        await fetch(`${globalState.url}api/auth/getUser?uid=${getUid.uid}`)
            .then((response) => response.json())
            .then((json) => {
                setUid({
                    name: json.fullname
                })
            })
                .catch((error) => {
                console.error(error);
        });
    }

    var button = [];
    for (let index = 0; index < 6; index++) {
        button.push(
            <Button key={index} title='d' >info</Button>
        )
    }
    
        return (
            <View>
                <Text>ini {getUid.name}</Text>
                

            </View>
        );
    
}

export default Home

const styles = StyleSheet.create({
    
})
