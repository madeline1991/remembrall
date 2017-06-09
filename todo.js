
export const add_listeners = () => {
  $("#submit").click(() => add_todo());
  $("li").click((e) => delete_todo(e));
};

const add_todo = () => {
  const $title = $("#todo-title");
  const $todoList = $("#todo-list");
  const todoTitle = $title.val();
  const newTodo = `<li>${todoTitle}</li>`;
  if (todoTitle != "") {
    $todoList.append(newTodo);
    $title.val("");
  };
};

const delete_todo = (e) => {
  $(e.target).remove();
};
