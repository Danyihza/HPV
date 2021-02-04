import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, TextInput, View } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { postMessages, getMessages } from '../../api'
import { Avatar } from '../../assets';
import { Chat, Compose } from '../../components/atoms';
import { colors } from '../../utils';

const ChatScreen = ({navigation}) => {
    const [state, setState] = useState({
        message: []
    })
    
    useEffect(() => {
        const unsubscribeMessages = getMessages((snapshot) => {
            console.log(snapshot.val());
            if(snapshot.val() !== null){
                // const message = snapshot.val();
                // const arr = 
                setState({
                    message: Object.values(snapshot.val()).reverse()
                })
            }
        })
        return () => {
            unsubscribeMessages;
        }
    }, [])

    return (
        <View style={{height: '100%'}}>
            <View style={styles.wrapper.header}>
                <TouchableOpacity style={{marginTop: 11}}>
                    <FontAwesome name="chevron-left" color="#fff" size={20}/>
                </TouchableOpacity>
                <View style={styles.avatar}>
                    <Image source={Avatar} width={100} height={100}/>
                </View>
                <Text style={styles.text.header}>Administrator</Text>
            </View>
            <View style={{height:'100%', flex: 1, paddingBottom:50}} >
                <FlatList
                data={state.message}
                renderItem={({item, index}) => {
                    <Chat
                    key={index}
                    item={item}
                    />
                }}
                // keyExtractor={(item, index) => index.toString()}
                />
                {/* <ScrollView showsVerticalScrollIndicator={false}>
                    {state.message.map((item, index) => {
                        return (
                            <Chat key={index} item={item}/>
                        )
                    })}
                </ScrollView> */}
                {/* <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[styles.wrapper.chat.container, styles.wrapper.chat.message]}>
                        <Text style={styles.text.chat}>lorem ipsum dolor sit amet consectetur adipiscing elit</Text>
                    </View>
                    <View style={[styles.wrapper.chat.container, styles.wrapper.chat.incoming]}>
                        <Text style={styles.text.chat}>lorem ipsum dolor sit amet consectetur adipiscing elit</Text>
                    </View>
                </ScrollView> */}
            </View>
            <Compose submit1={postMessages}/>
        </View>
    )
}

export default ChatScreen

const styles = {
    wrapper: {
        header: {
            // flex: 1,
            flexDirection: 'row',
            // padding: 20,
            paddingTop: 40,
            paddingBottom: 20,
            paddingHorizontal: 20,
            marginBottom: 20,
            backgroundColor: colors.default,
            elevation: 20
        },
        chat: {
            container: {
                maxWidth: 350,
                padding: 10,
                marginBottom: 10,
            },
            message: {
                // alignSelf: 'flex-end',
                backgroundColor: '#00454a',
                marginRight: 10,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 20,
                borderTopLeftRadius:20
            },
            incoming: {
                // alignSelf: 'flex-start',
                backgroundColor: '#022c43',
                marginLeft: 10,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 20,
                borderTopRightRadius:20
            }
        },
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
    },
    avatar: {
        // flex: 1,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 50/2,
        height: 50,
        width: 50,
    },
    text: {
        header: {
            marginTop: 12,
            marginLeft: 12,
            fontFamily: 'TypoGotikaBoldDemo',
            color: 'white',
            fontSize: 20,
        },
        chat: {
            fontFamily: 'TypoGotikaRegularDemo',
            color: '#fff'
        }
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
}
