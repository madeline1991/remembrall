
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
 ev.dataTransfer.setData("text/html", ev.target.id);
 ev.dropEffect = "move";
}

export function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move";
}

export function drop_handler(ev) {
 ev.preventDefault();
 var data = ev.dataTransfer.getData("text/html");
 if ($(ev.currentTarget).hasClass('complete')) {
   $("#completed-todo").append(document.getElementById(data));
 } else if ($(ev.currentTarget).hasClass('incomplete')) {
   $("#todo-list").append(document.getElementById(data));
 }
}
