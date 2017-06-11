
export const add_listeners = () => {
  $("#submit").click(() => add_todo());
  // $("li").click((e) => delete_todo(e));
};

const add_todo = () => {
  const $title = $("#todo-title");
  const $todoList = $("#todo-list");
  const todoTitle = $title.val();
  const newTodo = `<li draggable="true">${todoTitle}</li>`;
  if (todoTitle != "") {
    $todoList.append(newTodo);
    $title.val("");
  };
};

const delete_todo = (e) => {
  $(e.target).remove();
};

export function dragstart_handler(ev) {
  console.log("drag_start")
  debugger
 // Add the target element's id to the data transfer object
 ev.dataTransfer.setData("text/html", ev.target.id);
 ev.dropEffect = "move";
}

export function dragover_handler(ev) {
  console.log("dragover")
 ev.preventDefault();
 // Set the dropEffect to move
 ev.dataTransfer.dropEffect = "move"
}

export function drop_handler(ev) {
  console.log("drop")
 ev.preventDefault();
 // Get the id of the target and add the moved element to the target's DOM
 var data = ev.dataTransfer.getData("text/html");
 ev.target.appendChild(document.getElementById(data));
}

// export const drag = (ev) => {
//  console.log("dragStart");
//  // Add the target element's id to the data transfer object
//  ev.dataTransfer.setData("text/plain", ev.target.id);
//  ev.dropEffect = "move";
// }


//from w3 schools

// export const drag = (e) => {
//   debugger
//   e.dataTransfer.setData("text", e.target.id);
// };

// export const dragover_handler = (ev) => {
//   debugger
//  ev.preventDefault();
//  // Set the dropEffect to move
//  ev.dataTransfer.dropEffect = "move"
// }
//
// export const drop = (e) => {
//   e.preventDefault();
//   debugger
//   var data = e.dataTransfer.getData("text");
//   e.target.appendChild(document.getElementById(data));
// }
