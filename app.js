 var list = document.getElementById("list");
 
 
 function addTodo(){
    var todo_item = document.getElementById("todo_item")
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
  
    li.appendChild(liText)

    var delBtn =document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.appendChild(delText)
    delBtn.setAttribute("class" ,"btn")
    delBtn.setAttribute("onClick", "deleteItem(this)")
    var editBtn= document.createElement("button")
    var editText =document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class" ,"btn1")
    editBtn.setAttribute("onClick", "editItem(this)")
    li.appendChild(delBtn)
    li.appendChild(editBtn)

     list.appendChild(li)

     todo_item.value=""

    console.log(li);
 }

 function deleteItem(e){
        e.parentNode.remove()

 }
 function editItem(e){
   var val = e.parentNode.firstChild.nodeValue;
   var editValue = prompt("enter edit value",val)
   e.parentNode.firstChild.nodeValue = editValue
   console.log1(e.parentNode.firstChild)
 }






 function delAll(){
   list.innerHTML=""
 }








