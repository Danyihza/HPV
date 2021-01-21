import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../../../utils'

const Input = ({placeholder, ...rest}) => {
    return (
        <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={'#000000'} {...rest}/>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        // borderWidth: 1,
        borderColor: colors.default,
        borderBottomWidth: 1,
        opacity: 0.6,
        borderRadius: 5,
        // backgroundColor: 'white',
        paddingVertical: 9,
        // paddingHorizontal:10,
        fontSize: 18,
        color: '#000000'
    }
})
