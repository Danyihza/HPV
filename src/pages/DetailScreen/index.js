import { View, Text, StatusBar, SafeAreaView, VirtualizedList,FlatList, Animated, ImageBackground, Image } from 'react-native';
import React, {useState, useEffect, useRef} from 'react'
import Card from '../../components/atoms/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../utils';
import { HeaderDetail } from '../../components';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const DetailScreen = ({navigation, route}) => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    StatusBar.setTranslucent(true);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const globalState = useSelector((state) => state);
    const [getContent, setContent] = useState({
        content: [],
        loader : 1,
    });
    const {id_article} = route.params;



    useEffect(() => {
        getDetailArticles();
        return () => {

        }
    }, []);


    const getDetailArticles = () => {
        const url = `${globalState.url}/api/article/getArticleById/${id_article}`;
        fetch(url)
        .then(result => result.json())
        .then(result =>{
            // console.log(result.data.article_content);
            setContent({
                content: result.data.article_content
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }


        return (
            <View>
                <ScrollView>
                    <HeaderDetail onPress={() => navigation.goBack()}/>
                    <View style={styles.wrapper.content}>
                        <Text style={styles.text.content}>
                            Badan Pusat Statistik (BPS) Berkolaborasi dengan Kementerian Dalam Negeri merilis dapat kependudukan pada 2020 kemarin. Tercatat pada semester II tahun kemarin jumlah penduduk secara nasional mencapai 271.349.889 jiwa mengacu data Kemendagri dan BPS.
                        </Text>
                        <Image source={{uri : 'http://192.168.1.5/HPV-API/assets/uploads/article-1.png'}} style={styles.imageContent}/>
                        <Text style={styles.text.content}>
                            Sekretaris Jenderal Kementerian Dalam Negeri (Kemendagri) Muhammad Hudori menjelaskan dimana komposisi penduduk paling banyak adalah wanita 137.119.901, sementara pria 134.229.988 jiwa.
                            {"\n"}{"\n"}
                        </Text>
                        <Text style={styles.text.content}>
                        "Dimana jumlah kartu keluarga sebanyak 86.437.053 yang tercatata" katanya saat Rilis Data Sensus penduduk 2020 dan Data Administrasi Kependudukan 2020, Kemarin.
                        {"\n"}{"\n"}
                        Dimana penduduk per pulau paling banyak masih di Jawa 55,94%, Sumatera 21,73%, Sulawesi 7,43%, Kalimantan 6,13%, Bali & Nusa Tenggara 5,57, Papua 2,02%, Maluku 1,17%.
                        {"\n"}{"\n"}
                        Kepala BPS, Kecuk Suhariyanto menjelaskan pencatatan jumlah penduduk Indonesia menurut data sensus BPS 2020 sebanyak 270.203.917 jiwa. Data BPS relatif berbeda jika dibandingkan dengan data kependudukan Kemendagri semester II Kemendagri. Karena data BPS diambil per September 2020 sementara Kemendagri per Desember 2020.
                        {"\n"}{"\n"}
                        "Tapi kedua data ini sudah selaras karena sinkronisasi BPS dan Kemendagri. hanya ada tambahan di akhir tahun. Data sensus dan data penduduk sekarang sudah menyatu," katanya.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    
}

const styles = {
    wrapper: {
        content : {
            height: '100%',
            width: '100%',
            // fontFamily: 'TypoGotikaRegularDemo',
            padding: 20,
        }
    },
    page: {
        header: {
            flex:1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 10,
            paddingRight: 20,
            justifyContent: 'space-between',
        },
        horizontal: {
            flex: 1,
            height: 500,
            width: '100%',
            // paddingLeft: 20,
            // paddingBottom: 20,
            // paddingTop: 20,
            // borderBottomLeftRadius: 20,
            // borderBottomRightRadius: 20,
            // backgroundColor: colors.default,
            // elevation: 40,
        },
        vertical: {
            paddingHorizontal: 20,
            marginTop: -10,
            backgroundColor: colors.background
        }
    },
    space: (value) => {
        return {
          height: value,
        };
    },
    text : {
        title: {
            marginTop: 4,
            fontSize: 24,
            fontFamily: 'TypoGotikaBoldDemo',
            color: colors.dark,
            marginTop: 20,
            paddingVertical: 13,
        },
        titleWhite: {
            marginTop: 4,
            fontSize: 24,
            fontFamily: 'TypoGotikaRegularDemo',
            color: '#ffffff',
            marginTop: 20,
            paddingVertical: 13,
        },
        content : {
            // fontFamily: 'Feather',
            textAlign: 'justify',
            lineHeight: 25,
            color: '#000',
            fontSize: 18,
        }
    },
    image: {
        width: '100%',
        height: '70%',
    },
    imageContent : {
        width : '100%', 
        height : 200,
        marginVertical : 20
    }
}
export default DetailScreen