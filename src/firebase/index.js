import AsyncStorage from '@react-native-community/async-storage';
import database from '@react-native-firebase/database';

export const setListener = async (endpoint, updateFn) => {
    const userData = await AsyncStorage.getItem('uid');
    database()
    .ref(`${endpoint}/${userData}`).orderByValue().on('value', updateFn);
    return () => database().ref(endpoint).off()
}


export const getMessages = (updateFn) => {
    setListener('messages', updateFn)
};

export const pushData = async (endpoint,data) => {
    const userData = await AsyncStorage.getItem('uid');
    const now = new Date().getTime().toString();
    const lastId = database().ref(`${endpoint}/${userData}`).limitToLast(1).once("value").then((snapshot) => {
        if(snapshot.val() == null){
            return 1;
        } else {
            const id = Object.keys(snapshot.val()).toString();
            const arr = id.split('-');
            console.log(arr);
            return parseInt(arr[1]);
        }
    })
    .catch((err) => {
        console.log(err);
    })
    const realId = await lastId;
    return database().ref(`${endpoint}/${userData}`).child(`message-${realId+1}`).set(data);
}