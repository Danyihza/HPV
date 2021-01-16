import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useSelector } from 'react-redux';

// import { Text } from 'galio-framework'

const Home = () => {
  const globalState = useSelector((state) => state);

    const [getUid, setUid] = useState({
        uid: '',
        name: '',
    });


    useEffect(() => {
        // AsyncStorage.getItem('uid', (error, result) => {
        //     if(result){
        //         const uid = result;
        //         setUid({
        //             uid:uid
        //         })
        //     }
        // });
        // console.log('getUid.uid');
        
    })

    const getFullName = () => {
        console.log(AsyncStorage.getItem('fname'));
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
        
    return (
        <View>
            <Text p muted>ini {(val) => getFullName()}</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    
})
