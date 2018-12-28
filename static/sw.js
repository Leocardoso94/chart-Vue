/* eslint-disable */

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')
import firebase from 'firebase'
import 'firebase/messaging'

firebase.initializeApp({
  messagingSenderId: "your messagingSenderId again"
});
const messaging = firebase.messaging();

messaging.requestPermission()
  .then(() => {
    console.log('Notification permission granted.')
    return messaging.getToken()
  })
  .then(function (token) {
    console.log(token, 'token')
  })
  .catch((err) => {
    console.log('Unable to get permission to notify.', err);
  });
