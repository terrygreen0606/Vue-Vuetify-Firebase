import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
	apiKey: 'AIzaSyBR_twxa0XUxP-of1Ws0OQBqAaTTu_riek',
	authDomain: 'vue-calendar-3797c.firebaseapp.com',
	databaseURL: 'https://vue-calendar-3797c.firebaseio.com',
	projectId: 'vue-calendar-3797c',
	storageBucket: 'vue-calendar-3797c.appspot.com',
	messagingSenderId: '307641794537',
	appId: '1:307641794537:web:d55722b0dd975bc8521578'
});

export const db = firebase.firestore();

new Vue({
	vuetify,
	render: h => h(App)
}).$mount('#app');
