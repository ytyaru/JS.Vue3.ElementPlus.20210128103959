/*
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
*/

// https://element-plus.org/#/jp/component/quickstart
/*
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
*/

import { createApp } from 'vue'
import { ElButton, ElSelect, ElDatePicker } from 'element-plus';
import lang from 'element-plus/lib/locale/lang/ja'
import 'dayjs/locale/ja'
import locale from 'element-plus/lib/locale'
import App from './App.vue';

locale.use(lang)

const app = createApp(App)

app.component(ElButton.name, ElButton);
app.component(ElSelect.name, ElSelect);
app.component(ElDatePicker.name, ElDatePicker);

//app.use(ElementPlus, { locale });
//dayjs.locale('ja'); // en, ja
/* or
 * app.use(ElButton)
 * app.use(ElSelect)
 */

app.mount('#app')
