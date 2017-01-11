import 'tether';
import 'jquery';
import 'bootstrap';
import 'animate.css';
import moment from "moment"
import Holder from 'holderjs';
// import 'lodash';

import '../src/styles/base.scss'
import 'font-awesome/scss/font-awesome.scss'


import Vue from 'vue';
import Base from './components/Base.vue';
import Hello from './components/Hello.vue';
import Goodbye from './components/Goodbye.vue';
import Foot from './components/Footer.vue'

const APPS = {
  Base,
  Hello,
  Goodbye,
  Foot
};

function renderAppInElement(el) {
  let App = APPS[el.id];
  if (!App) return;

  const props = Object.assign({}, el.dataset);
  new Vue ({
    el,
    render(createElem) {
      return createElem(App, {
        attrs: props
      });
  }
  })
}

document.querySelectorAll('.__vue-root').forEach(renderAppInElement)
