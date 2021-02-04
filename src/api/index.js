import {setListener, pushData} from '../firebase'

export const getMessages = (updaterFn) => setListener('messages', updaterFn);
export const postMessages = (message) => {
    if (Boolean(message)) {
        pushData('messages', {
            time: new Date().getTime(),
            incoming: false,
            message
        })
    }
}