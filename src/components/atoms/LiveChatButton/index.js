import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../utils'

const LiveChatButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon name="chatbubbles-sharp" size={30} color="#fff"/>
            </View>
        </TouchableOpacity>
    )
}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.default,
        borderRadius: 70/2,
        height: 70,
        width: 70,
    },
    text: {
        textAlign: 'center',
    }
}
export default LiveChatButton
