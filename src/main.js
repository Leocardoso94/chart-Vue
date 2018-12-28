// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import ECharts from 'vue-echarts'
// import * as firebase from 'firebase/app'
import firebase from 'firebase'
import 'firebase/messaging'

let config = {
  apiKey: 'AIzaSyDuxZyasFUkbsy76ojpqP8zSF6JEPoqdEQ',
  authDomain: 'baboon-1537785300429.firebaseapp.com',
  databaseURL: 'https://baboon-1537785300429.firebaseio.com',
  projectId: 'baboon-1537785300429',
  storageBucket: 'baboon-1537785300429.appspot.com',
  messagingSenderId: '458802084766'
}
firebase.initializeApp(config)

navigator.serviceWorker
  .register('/static/sw.js')
  .then(async registration => {
    firebase.messaging().useServiceWorker(registration)

    const messaging = firebase.messaging()
    await messaging.requestPermission()
    const token = await messaging.getToken()
    console.log('token:', token)
  })
  .catch(console.error)

Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
