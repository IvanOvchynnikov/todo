const tasks=[]

const inputField = document.getElementById("taskAdd");
const buttonMain = document.getElementById("add");

inputField.addEventListener('keyup', function(event){
    if (event.key === 'Enter') {
        buttonMain.click();
    }
})

document.getElementById("add").onclick = () => {
    let li = document.createElement("li");
    let text = document.getElementById("taskAdd").value;

    if( text == "" ) {
        alert("Будь ласка, введіть задачу")
        return;
    }
    let t=document.createElement('div');
    t.className="task_text";
    let paragraphElement=document.createElement('p');
    paragraphElement.textContent=text;
    t.appendChild(paragraphElement);

    let cur_task=document.createElement("li");
    cur_task.setAttribute("class","task");
    cur_task.appendChild(t);

    let ButtonClose=document.createElement("button");
    ButtonClose.innerHTML="X";
    ButtonClose.setAttribute("class","buttonClose");
    ButtonClose.setAttribute("id",`${tasks.length}`);
    ButtonClose.setAttribute("onclick","close_click(this)");
    cur_task.appendChild(ButtonClose);

    tasks.push(cur_task);
    document.getElementById("taskAdd").value = "";
    document.getElementById("myUL").appendChild(cur_task);
}

function close_click(button){
    let index=button.id;
    tasks.splice(index,1);
    let lists=document.getElementsByClassName("task");
    while(lists.length>0){
        lists.item(0).remove();
    }
    console.log(tasks)
    for(let i=0; i<tasks.length; i++)
    {
        let t=document.createElement('div');
        let paragraphElement=document.createElement('p');
        paragraphElement.textContent=tasks[i].childNodes[0].childNodes[0].textContent;
        t.appendChild(paragraphElement);
        t.className="task_text";
        let cur_task=document.createElement("li");
        cur_task.setAttribute("class","task");
        cur_task.appendChild(t);

        let ButtonClose=document.createElement("button");
        ButtonClose.innerHTML="X";
        ButtonClose.setAttribute("class","buttonClose");
        ButtonClose.setAttribute("id",`${i}`);
        ButtonClose.setAttribute("onclick","close_click(this)");
        cur_task.appendChild(ButtonClose);

        document.getElementById("myUL").appendChild(cur_task);
    }


}

