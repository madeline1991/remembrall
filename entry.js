// import Todo from './todo';
import { add_listeners, dragstart_handler, dragover_handler, drop_handler } from "./todo";

document.addEventListener("DOMContentLoaded", () => {
  add_listeners();
  window.dragstart_handler = dragstart_handler;
  window.drop_handler = drop_handler;
  window.dragover_handler = dragover_handler;
});
