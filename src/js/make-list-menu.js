import dataMenu from './menu.json';
import templateMenu from '../template/items-tpl.hbs';

const listMenuRef = document.querySelector('.js-menu');

const markupMenu = templateMenu(dataMenu);

listMenuRef.innerHTML = markupMenu;