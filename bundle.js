/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = dragstart_handler;
/* harmony export (immutable) */ __webpack_exports__["d"] = dragover_handler;
/* harmony export (immutable) */ __webpack_exports__["c"] = drop_handler;

const add_listeners = () => {
  $l("#submit").on('click', () => add_todo());
  $l("ul").on('click', ((e) => delete_todo(e)));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = add_listeners;


const add_todo = () => {
  const $ltitle = $l("#todo-title");
  const $ltodoList = $l("#todo-list");
  const todoTitle = $ltitle.val();
  const newTodo = `<li id=td${getDate()} draggable="true" ondragstart="dragstart_handler(event)">
      <button class="delete">X</button>
      ${todoTitle}</li>`;
  if (todoTitle !== "") {
    $ltodoList.append(newTodo);
    $ltitle.val("");
  }
};

const delete_todo = (e) => {
  $l(e.target).parent().remove();
};

function dragstart_handler(ev) {
 ev.dataTransfer.setData("text/html", ev.target.id);
 ev.dropEffect = "move";
}

function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move";
}

function drop_handler(ev) {
 ev.preventDefault();
 var data = ev.dataTransfer.getData("text/html");
 const $lelement = $l(`#${data}`);
 $lelement.remove($lelement);

 if ($l(ev.currentTarget).hasClass('complete')) {
   $lelement.attr("id", `cd${getDate()}`);
   $l("#completed-todo").append($lelement);
 } else if ($l(ev.currentTarget).hasClass('incomplete')) {
   $lelement.attr("id", `td${getDate()}`);
   $l("#todo-list").append($lelement);
 }
}

const getDate = () => {
  return Date.now();
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo__ = __webpack_require__(0);
// import Todo from './todo';


document.addEventListener("DOMContentLoaded", () => {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__todo__["a" /* add_listeners */])();
  window.dragstart_handler = __WEBPACK_IMPORTED_MODULE_0__todo__["b" /* dragstart_handler */];
  window.drop_handler = __WEBPACK_IMPORTED_MODULE_0__todo__["c" /* drop_handler */];
  window.dragover_handler = __WEBPACK_IMPORTED_MODULE_0__todo__["d" /* dragover_handler */];
});


/***/ })
/******/ ]);