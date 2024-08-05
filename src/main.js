import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

// 將圖標添加到庫中
library.add(faPenToSquare, );

const app = createApp(App);

// 全局註冊 FontAwesomeIcon 組件
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
