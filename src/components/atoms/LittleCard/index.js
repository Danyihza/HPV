import React from 'react';
import {Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors} from '../../../utils';

const LittleCard = ({title, onPress, imageUrl, timeRead}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.wrapper.component}>
                <View style={styles.wrapper.image}>
                    <Image style={styles.image} source={{
                        uri: imageUrl
                    }}/>
                </View>
                <View style={styles.wrapper.text}>
                    <Text style={styles.text.title}>{title}</Text>
                    <Text style={styles.text.subtitle}>{timeRead} mins read</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = {
    wrapper : {
        component: {
            // paddingHorizontal: 100,
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            padding: 15,
            backgroundColor: colors.littlecard,
            borderColor: colors.default,
            height: 150,
            width: '100%',
            borderRadius: 10,
            marginRight: 20,
            marginBottom: 20
        },
        image: {
            width: '40%'
        },
        text: {
            width: '60%',
            paddingLeft: 20
        }
    },
    text : {
        title: {
            marginTop: 4,
            fontSize: 18,
            lineHeight: 22,
            // fontFamily: 'TypoGotikaRegularDemo',
            color: colors.dark,
        },
        subtitle: {
            marginTop: 6,
            fontSize: 14,
            // fontFamily: 'TypoGotikaRegularDemo',
            color: colors.default,
            opacity: 1
        }
    },
    image : {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }
}

export default LittleCard;