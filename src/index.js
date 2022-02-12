import * as $ from 'jquery';
import Post from './post.js';
import WebpackLogo from './assets/img/1.jpg';
import './scss/app.scss';
import xml from './assets/data.xml';
import json from './assets/json.json';
import './styles/styles.css';

const post = new Post('eback Pt Tittle', WebpackLogo);

// console.log('ost to string', post.toString());

$('pre').addClass('code').html(post.toString());

// console.log('json:', json);
// console.log('xml', xml);
