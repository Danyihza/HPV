import { View, Text, StatusBar, SafeAreaView, VirtualizedList,FlatList, Animated, ImageBackground, Image } from 'react-native';
import React, {useState, useEffect, useRef} from 'react'
import Card from '../../components/atoms/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../utils';
import { Button, HeaderDetail, HeaderFaq, ListFaq, LiveChatButton } from '../../components';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Faq } from '../../assets';

const HelpScreen = ({navigation, route}) => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    StatusBar.setTranslucent(true);
    const globalState = useSelector((state) => state);
    const [section, setSection] = useState({
        activeSections: [],
    });

    useEffect(() => {

        return () => {

        }
    }, []);
    


        return (
            <View style={{height: '100%'}}>
                <ScrollView>
                    <HeaderFaq/>
                    <View style={styles.wrapper.container}>
                        <Faq width="100%" height="180"/>
                        <View style={{ marginBottom: 20}}/>
                        <ListFaq question="Bagaimana Mencegah HPV ?"/>
                        <ListFaq question="Apakah HPV Bisa di Obati ?"/>
                        <ListFaq question="Apa yang di lakukan jika terinfeksi ?"/>
                        <ListFaq question="Cara Mendapatkan Perawatan ?"/>
                    </View>
                </ScrollView>
                <View style={styles.wrapper.livechat}>
                    <LiveChatButton onPress={() => navigation.navigate('ChatScreen')}/>
                </View>
            </View>
        );
    
}

const styles = {
    wrapper: {
        container: {
            padding: 20,
            flex: 1,
            // height: 400
        },
        main: {
            // height: '100%',
            flex: 1,
            justifyContent: 'space-between',
        },
        livechat: {
            position: 'absolute', 
            right: 20, 
            bottom: 30
        }
    }
}
export default HelpScreen