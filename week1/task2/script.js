import { TODO_LIST } from "./TODO_LIST.js";

const categoryContainer = document.querySelector(".todo-category");

// 할일 리스트 함수
function renderTasks(tasks) {
  return tasks
    .map(
      (task) =>
        `<p><span class="status">${getStatusIcon(task.status)}</span>${
          task.name
        } </p>`
    )
    .join("");
}

//상태표시 아이콘 함수
function getStatusIcon(status) {
  return status === "done" ? "❤️" : "🤍";
}

// 카테고리 네임 & 카테고리 렌더 함수
function renderCategories() {
  TODO_LIST.map((item, index) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("todo--list");
    categoryDiv.dataset.index = index;

    categoryDiv.innerHTML = `
    <section class="todo">
      <div class="todo--category">
        <div class="todo--title">
          <h3 class="${item.category}">${item.categoryName}</h3>
          <button class="addBtn" type="button">+</button>
        </div>
        <div class ="todo--list">
          ${renderTasks(item.tasks)}
        </div>
      </div>
    </section>
  `;
    categoryContainer.appendChild(categoryDiv);

    const modal = createModal(index);
    categoryDiv.appendChild(modal);

    const addBtn = categoryDiv.querySelector(".addBtn");

    addBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
}

//모달만들기

function createModal(index) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>할 일 추가 뿡!</h2>
      <input type="text" id="addNewTask" placeholder="할일이 뭐냐뿡?" />
      <button id="saveAddBtn">추가</button>
    </div>
  `;
  modal.style.display = "none";

  const closeBtn = modal.querySelector(".close");
  const saveAddBtn = modal.querySelector("#saveAddBtn");

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  saveAddBtn.addEventListener("click", () => {
    const addNewTask = document.querySelector("#addNewTask").value;
    const newTask = { name: addNewTask, status: "no" };
    TODO_LIST[index].tasks.push(newTask);

    const todoListDiv = document.querySelector(
      `[data-index="${index}"] .todo--list`
    );
    todoListDiv.innerHTML = renderTasks(TODO_LIST[index].tasks);

    modal.style.display = "none";
    updateCount();
  });

  return modal;
}

//할 일 카운터 함수
function updateCount() {
  let willDoCount = 0;
  let doneCount = 0;

  TODO_LIST.forEach((item) => {
    item.tasks.forEach((task) => {
      if (task.status === "done") {
        doneCount++;
      } else {
        willDoCount++;
      }
    });
  });

  console.log(`할 일 개수: ${willDoCount}, 완료 개수: ${doneCount}`);

  const gridTodo = document.querySelector(".grid-todo-today");
  gridTodo.innerHTML = `${willDoCount}`; //할 일 카운터 화면에 띄우기
}

//화면 초기화 시 렌더링 함수 init();(안하니까 초기 화면이 안뜸)
function init() {
  updateCount();
  renderCategories();
}

init();
