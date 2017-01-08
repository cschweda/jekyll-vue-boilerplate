import 'tether';
import 'jquery';
import 'bootstrap';
import 'lodash';

import Vue from 'vue';
import Hello from './components/Hello.vue';
import Goodbye from './components/Goodbye.vue';
const APPS = {
  Hello,
  Goodbye
};

if (document.querySelectorAll('.__vue-root')) console.log('yes')
let v = new Vue({
  el: '#Hello',
  render: h => h(Goodbye)
})
