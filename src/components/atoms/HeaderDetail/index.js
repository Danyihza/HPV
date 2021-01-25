import React from 'react';
import {Text, View, Image, StatusBar, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { IconBack } from '../../../assets';
import {colors} from '../../../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const HeaderDetail = ({title, onPress, imageUrl, timeRead}) => {
    
    return (
        <View style={styles.wrapper.title}>
            {/* <Text>ini text</Text> */}
            <Image source={{uri : 'http://192.168.1.5/HPV-API/assets/uploads/article-1.png'}} style={styles.image} />
            <Text style={styles.text.title}>Sensus BPS: Penduduk RI 270,2 Juta, Dominan Gen Z & Milenial</Text>
            <IconBack onPress={onPress} style={styles.iconback}/>
            <MaterialCommunityIcons name="bookmark-outline" style={styles.iconbookmark} color={'#000'} size={32} />
            <View style={styles.minitext.wrapper}>
                <MaterialCommunityIcons name="timer" style={{marginRight: 8}} color={'#FFF'} size={20} />
                <Text style={styles.minitext.text}>10 mins read</Text>
            </View>
        </View>
    )
}

const styles = {
    wrapper : {
        title: {
            // paddingHorizontal: 100,
            borderColor: colors.default,
            // borderWidth: 1,
            height: 450,
            width: '100%',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            elevation : 20,
            // borderRadius: 5,
            // marginRight: 20,
            // marginBottom: 15
        },
        content : {
            height: '100%',
            width: '100%',
            // fontFamily: 'TypoGotikaRegularDemo',
            padding: 20,
        }
    },
    image : {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    iconback : {
        position: 'absolute',
        left: 20,
        top: 30
    },
    iconbookmark : {
        position: 'absolute',
        right: 20,
        top: 30
    },
    text : {
        title : {
            position: 'absolute',
            bottom: 80,
            paddingRight: 20,
            left: 20,
            // borderWidth: 1,
            //     borderColor: '#fff',
            fontSize: 24,
            fontFamily: 'TypoGotikaRegularDemo',
            color: '#ffffff',
            textShadowColor: 'rgba(0, 0, 0, 1)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 100
        },
        content : {
            // fontFamily: 'Feather',
            textAlign: 'justify',
            lineHeight: 25,
            color: '#000',
            fontSize: 18,
        }
    },
    minitext : {
        text : {
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'TypoGotikaBoldDemo',
            color: '#ffffff',
        },
        wrapper : {
            alignItems: 'center',
            flexDirection: 'row',
            bottom: 65,
            left: 20,
            padding: 8,
            borderRadius: 20,
            // borderWidth: 1,
            // borderColor: '#fff',
            backgroundColor : '#ff6363',
            width: '37%',
            // height: '100%'
        }
    }
}

export default HeaderDetail;