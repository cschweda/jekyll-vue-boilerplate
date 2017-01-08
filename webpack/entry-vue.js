import 'tether';
import 'jquery';
import 'bootstrap';
import 'lodash';

import Vue from 'vue';
import Hello from './components/Hello.vue';

const v = new Vue({
  el: '#vue',
  render: h => h(Hello)
})
