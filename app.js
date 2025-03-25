var parent = document.getElementById("parent")
var note = document.getElementById("note")

function getValue() {
    var input = document.getElementById("input");

    //Length Error
    if (input.value.length <= 4) {
        var input = document.getElementById("input");
        input.style.outline = "1px solid red"

        if (note.children.length == 0) {
            var p = document.createElement("p")
            p.innerHTML = "Write atleast 5 characters."
            p.style.color = "red"

            note.appendChild(p)
        }else if (note.children.length == 1) {
            note.removeChild(note.children[0])
            var p = document.createElement("p")
            p.innerHTML = "Write atleast 5 characters."
            p.style.color = "red"

            note.appendChild(p)
        }
    } else {
        input.style.outline = "none"

        if (note.children.length == 1) {
            note.removeChild(note.children[0])
        }
    }

    // Storage Error
    if (parent.children.length == 5 && note.children.length == 0) {
        var p = document.createElement("p")
        p.innerHTML = "Not Enough Space"
        p.style.color = "red"
        p.setAttribute("class", "storageMsg")

        note.appendChild(p)
    }

    // Append List item
    if (input.value.length >= 5 && parent.children.length <= 4) {
        var liElement = document.createElement("li")
        if (parent.children.length >= 1) {
            parent.insertBefore(liElement, parent.children[0])
        }else {
            parent.appendChild(liElement)
        }

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
        deleteBtn.setAttribute("onclick", "deleteval(this)")
        btns.appendChild(deleteBtn)

        input.value = ""
    }
}


function deleteval(btn) {
    btn.parentElement.parentElement.remove()

    // Remove The existent  Error
    if (note.children.length == 1) {
        note.removeChild(note.children[0])
    }

    // Empty list message
    if (parent.children.length <= 0) {
        var p = document.createElement("p")
        p.innerHTML = "Nothing Is Here..."
        p.style.color = "red"

        note.appendChild(p)
    }
}