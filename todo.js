
export const add_listeners = () => {
  $l("#submit").on('click', () => add_todo());
  $l("ul").on('click', ((e) => delete_todo(e)));
};

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
