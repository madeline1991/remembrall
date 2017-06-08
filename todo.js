
export const add_listeners = () => {
  $("#submit").click(()=> add_todo());
};

const add_todo = () => {
  const $title = $("#todo-title");
  const $todoList = $("#todo-list");
  const newTodo = `<li>${$title.val()}</li>`;
  $todoList.append(newTodo);
  $title.val("");
};
