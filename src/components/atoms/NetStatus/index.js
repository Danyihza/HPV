import React, {useState, useEffect} from 'react';
import {Text, View, NetInfo} from 'react-native';
import {colors} from '../../../utils';
// import NetInfo from "@react-native-community/netinfo";

const NetStatus = ({title, onPress}) => {

    const [netStat, setNet] = useState({
        is_connected: true,
      });

    useEffect(() => {
        NetInfo.isConnected.addEventListener('connectionChange', handleConnectivityChange());
        return () => {
            NetInfo.isConnected.removeEventListener('connectionChange', handleConnectivityChange());
        }
    }, [])

    const handleConnectivityChange = isConnected => {
        setNet({
            is_connected: isConnected
        });
    };

    if (!netStat.is_connected) {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{position: 'relative', backgroundColor: '#ec4646', width: '100%', textAlign: 'center', paddingVertical:3, color: 'white'}}>No Network Available</Text>
            </View>
        )
    } else {
        return null;
    }
}

const styles = {
    wrapper : {
        component: {
            // paddingHorizontal: 100,
            backgroundColor: colors.default,
            borderRadius: 5,
            paddingVertical: 13,
        },
    },
    text : {
        title: {
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center',
        }
    }
}

export default NetStatus;