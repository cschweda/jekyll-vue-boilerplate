
// import moment from "moment"
import 'lodash';
import jQuery from 'jquery';
window.$ = window.JQuery = jQuery;
import Vue from 'vue';
import Hello from './components/Hello.vue';
import Footer from './components/Footer.vue';


const APPS = {
  Hello,
  Footer
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
