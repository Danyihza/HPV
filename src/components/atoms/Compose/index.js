import React, { useState } from 'react';
import { View, Text, Keyboard, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Compose = ({submit1}) => {
    const [state, setState] = useState({
        text: ''
    })

    const submit = () => {
        submit1(state.text);
        setState({
            text: ''
        })
        Keyboard.dismiss();
    }
    return (
        <View style={styles.wrapper.footer}>
            <TextInput
            style={styles.wrapper.input} 
            placeholder="Type a message" 
            placeholderTextColor={'#fff'}
            value={state.text}
            onChangeText={(value) => setState({
                text: value
            })}
            editable={true}
            />
            <TouchableOpacity onPress={submit}>
                <MaterialCommunityIcons name="send-circle" color="#fff" size={40}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    wrapper: {
        footer: {
            position: 'absolute',
            flexDirection: 'row',
            bottom: 0,
            width: '100%',
            height: 60,
            padding: 10,
            backgroundColor: colors.default,
        },
        input: {
            width: '81%',
            padding: 10,
            borderRadius: 10,
            color: '#fff',
            backgroundColor: '#0b284a',
            marginRight: 30
        }
    }
}

export default Compose
