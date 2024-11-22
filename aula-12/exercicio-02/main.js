function destacar(event) {
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let list = document.querySelector(".nameList");
  let nameInList = list.querySelectorAll("li");
  let newList = [];

  for (let i = 0; i < nameInList.length; i++) {
    let actualName = nameInList[i].textContent;

    if (name == actualName) {
      let li = document.createElement("li");
      let strong = document.createElement("strong");
      strong.innerText = actualName;
      li.appendChild(strong);

      newList.push(li);
      console.log(newList);
    } else {
      let li = document.createElement("li");
      li.innerHTML = actualName;
      newList.push(li);
    }
  }
  list.innerText = "";
  for (let i = 0; i < newList.length; i++) {
    list.appendChild(newList[i]);
  }
}
