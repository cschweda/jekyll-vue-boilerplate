
// import moment from "moment"
import 'lodash';
import jQuery from 'jquery';
window.$ = window.JQuery = jQuery;
import Vue from 'vue';
import Hello from './components/Hello.vue';
import MyFooter from './components/Footer.vue';
import Greet from './components/Greet.vue';

import '../_sass/app.scss'

const APPS = {
  Hello,
  MyFooter,
  Greet
};

// Vue.config.devtools = true

function renderAppInElement(el) {
  let App = APPS[el.id];
  if (!App) return;

  // Props as data attributes:
  // <div class="__vue-root" data-message="Hello" id="Greet"></div>
  const props = Object.assign({}, el.dataset);
  console.log(props)
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
