function addStudent() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Enter name");
        return;
    }

    let li = document.createElement("li");
    li.innerText = name;

    document.getElementById("list").appendChild(li);

    document.getElementById("name").value = "";
}
