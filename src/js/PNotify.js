import * as PNotify from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const onSpecificNotification = () => {
    PNotify.error({
            text: "Too many matches found. Please enter a more specific query!",
            hide: true,
            delay: 2000
        })
}

const errorNotification = () => {
    PNotify.error({
            text: "Country is not found.",
            hide: true,
            delay: 2000
        })  
}

export {onSpecificNotification, errorNotification}