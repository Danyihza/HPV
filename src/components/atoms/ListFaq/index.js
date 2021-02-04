import React from 'react'
import { View, Text, TouchableOpacity, LayoutAnimation } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import { Icon } from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../../utils'

const ListFaq = ({question}) => {
    
    return (
        <TouchableNativeFeedback>
            <View style={styles.container}>
                <Text style={styles.text.default}>{question}</Text>
            </View>
        </TouchableNativeFeedback>
    )

}

const styles = {
    container: {
        borderBottomWidth: 2,
        borderColor: colors.default,
        paddingBottom: 10,
        marginTop:10
    },
    text: {
        default: {
            fontFamily:'TypoGotikaRegularDemo',
            fontSize: 20,
        }
    }
}

export default ListFaq;
