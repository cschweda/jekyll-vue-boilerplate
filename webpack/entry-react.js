import 'tether';
import 'jquery';
import 'bootstrap';
import 'lodash';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

const APPS = {
  Hello
};

function renderAppInElement(el) {
  var App = APPS[el.id];
  if (!App) return;

  // get props from elements data attribute, like the post_id
  const props = Object.assign({}, el.dataset);

  ReactDOM.render(<App {...props} />, el);
}

document.querySelectorAll('.__react-root').forEach(renderAppInElement)
