let dishes = [
  { name: "Cheese Pizza", desc: "Mozzarella & herbs" },
  { name: "Paneer Wrap", desc: "Spicy paneer roll" },
];

function addToCart(item) {
  alert(item + " added to cart!");
}

function deleteOrder(btn) {
  btn.parentElement.remove();
}

function openModal(mode, index = null) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modalTitle").innerText =
    mode === "add" ? "Add Dish" : "Update Dish";
  document.getElementById("dishName").value = "";
  document.getElementById("dishDesc").value = "";
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function saveDish() {
  const name = document.getElementById("dishName").value;
  const desc = document.getElementById("dishDesc").value;
  if (!name || !desc) return alert("Fill all fields");
  dishes.push({ name, desc });
  renderMenu();
  closeModal();
}

function renderMenu() {
  const menuList = document.getElementById("menuList");
  if (!menuList) return;
  menuList.innerHTML = "";
  dishes.forEach((dish, i) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
        <h3>${dish.name}</h3>
        <p>${dish.desc}</p>
        <button onclick="editDish(${i})">✏️ Edit</button>
        <button onclick="deleteDish(${i})">🗑️ Delete</button>
      `;
    menuList.appendChild(div);
  });
}

function deleteDish(i) {
  dishes.splice(i, 1);
  renderMenu();
}

function editDish(i) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modalTitle").innerText = "Update Dish";
  document.getElementById("dishName").value = dishes[i].name;
  document.getElementById("dishDesc").value = dishes[i].desc;

  document.querySelector("#modal button").onclick = () => {
    dishes[i].name = document.getElementById("dishName").value;
    dishes[i].desc = document.getElementById("dishDesc").value;
    renderMenu();
    closeModal();
  };
}

window.onload = renderMenu;

// Redirect logic (just for demo purposes)
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Redirecting to login page...");
  });
});
