import React from 'react'
import { View, Text } from 'react-native'

const Chat = ({item, ...rest}) => {
    const time = (times) => {
        const date = new Date(times);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        const strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    return (
        <View style={[styles.wrapper.chat.container, item.incoming ? styles.wrapper.chat.incoming : styles.wrapper.chat.message]} {...rest}>
            <Text style={styles.text.chat}>{item.message}</Text>
            <Text style={[styles.text.chat, {opacity:0.4}]}>{time(item.time)}</Text>
        </View>
    )
}

const styles = {
    wrapper: {
        chat: {
            container: {
                maxWidth: 350,
                minWidth: 80,
                padding: 10,
                marginBottom: 10,
            },
            message: {
                alignSelf: 'flex-end',
                backgroundColor: '#00454a',
                marginRight: 10,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 20,
                borderTopLeftRadius:20
            },
            incoming: {
                alignSelf: 'flex-start',
                backgroundColor: '#022c43',
                marginLeft: 10,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 20,
                borderTopRightRadius:20
            }
        }
    },
    text : {
        chat: {
            fontFamily: 'TypoGotikaRegularDemo',
            color: '#fff'
        }
    }
}

export default Chat
