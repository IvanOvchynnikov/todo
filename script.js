document.getElementById("add").onclick= () => {
    let li = document.createElement("li");
    let text=document.getElementById("taskAdd").value;
    let t=document.createTextNode(text);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("taskAdd").value="";
}