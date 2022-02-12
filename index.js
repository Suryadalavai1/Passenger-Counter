const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

let count = 0;
function increment() {
  count += 1;
  countEl.innerHTML = count;
}

function save() {
  previousEntries = count + " , ";
  saveEl.innerHTML += previousEntries;
  countEl.innerHTML = 0;
  count = 0;
}
