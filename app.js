var parent = document.getElementById("parent")

function getValue() {
    var input = document.getElementById("input");


    if(input.value.length <= 5) {
        var input = document.getElementById("input");
        input.style.outline = "1px solid red"
    }else {
        input.style.outline = "none"
    }

    if (parent.children.length = 5 ) {
        var note = document.getElementById("note")
        var h6 = document.createElement("h6")
        h6.innerHTML = "Not Enough Space"
        h6.style.color = "red"
        
        note.appendChild(h6)
    }

    if(input.value.length >= 5 && parent.children.length <= 4) {
        var liElement = document.createElement("li")
        parent.insertBefore(liElement, parent.children[0])

        var h4 = document.createElement("h4")
        h4.innerHTML = input.value
        liElement.appendChild(h4)

        var btns = document.createElement("div")
        btns.setAttribute("class", "btns")
        liElement.appendChild(btns)

        var edit = document.createElement("button")
        edit.innerHTML = "Edit"
        edit.setAttribute("class", "edit")
        btns.appendChild(edit)

        var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.setAttribute("class", "delete")
        btns.appendChild(deleteBtn)

        input.value = ""
    }
}