import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../utils';

const Card = ({title, onPress, imageUrl, author}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.wrapper.component}>
                <Image style={styles.image} source={{
                    uri: 'https://mmc.tirto.id/image/otf/700x0/2016/08/16/TIRTO-shutterstock_115590688_ratio-16x9.JPG'
                }}/>
                <Text style={styles.text.title}>Eating a diet rich in fruit and vegetables daily lower risk</Text>
                <Text style={styles.text.subtitle}>By Dany</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = {
    wrapper : {
        component: {
            // paddingHorizontal: 100,
            borderColor: colors.default,
            borderWidth: 0,
            height: 220,
            width: 280,
            borderRadius: 5,
            marginRight: 20,
            marginBottom: 15
        },
    },
    text : {
        title: {
            marginTop: 4,
            fontSize: 18,
            lineHeight: 22,
            fontFamily: 'TypoGotikaRegularDemo',
            color: '#ffffff',
        },
        subtitle: {
            marginTop: 6,
            fontSize: 14,
            fontFamily: 'TypoGotikaRegularDemo',
            color: '#ffffff',
            opacity: 1
        }
    },
    image : {
        width: '100%',
        height: '70%',
        borderRadius: 10,
    }
}

export default Card;