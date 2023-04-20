import { TODO_LIST } from "./TODO_LIST.js";

// 한 일 안한일 구분하기
//달력에 표시하기
//할 일 체크 함수<햇>
//페이지 이동

//리스트 map으로 출력
const categoryContainer = document.querySelector(".todo-category");

TODO_LIST.map((item, index) => {
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("todo--list");

  categoryDiv.innerHTML = `
    <section class="todo">
      <div class="todo--category">
        <div class="todo--title">
          <h3 class="${item.category}">${item.categoryName}</h3>
          <button class="addBtn" data-index="${index}" type="button">+</button>
        </div>   
        <div class="todo--list">
          ${item.tasks.map((task) => `<p>${task.name}</p>`).join("")} 
        </div> 
      </div>
    </section>
  `;
  //tasks안에 name이 태스크 배열

  //모달 할일 추가 만들기<기능2>
  categoryContainer.appendChild(categoryDiv);

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
  categoryDiv.appendChild(modal);

  const addBtn = categoryDiv.querySelector(`[data-index="${index}"]`);
  const closeBtn = modal.querySelector(".close");
  const saveAddBtn = modal.querySelector("#saveAddBtn");
  modal.style.display = "none";

  addBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  saveAddBtn.addEventListener("click", () => {
    const addNewTask = document.querySelector("#addNewTask").value;
    const newTask = { name: addNewTask };
    TODO_LIST[index].tasks.push(newTask);
    const todoListDiv = categoryDiv.querySelector(".todo--list");
    todoListDiv.innerHTML += `<p>${newTask.name}</p>`;
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
