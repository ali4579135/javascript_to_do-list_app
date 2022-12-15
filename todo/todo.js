const item = document.querySelector('#item');
const todobox = document.querySelector('.todo-item');
item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            todo(this.value);
            this.value = "";
        }
    }
)
const todo = (item) => {
    const listitem = document.createElement("li");
    listitem.innerHTML = `
                 ${item}
                <i class="fa-solid fa-xmark"></i>`;
    listitem.addEventListener(
        "click",
        function () {
            this.classList.toggle('done');
        }
    )
    listitem.querySelector('i').addEventListener(
        "click",
        function () {
            listitem.remove();
        }
    )
    todobox.appendChild(listitem);
}