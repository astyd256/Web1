var count = 0;
Add();
document.getElementById("add_btn").onclick = Add; 
document.getElementById("save_btn").onclick = Save;

function Add(){
    count++;
    var FirstInput = document.createElement("input");
    var SecondInput = document.createElement("input");
    var UpButton = document.createElement("button");
    var DownButton = document.createElement("button");
    var DeleteButton = document.createElement("button");
    var new_block = document.createElement("div");

    document.getElementById("main").append(new_block);
    new_block.append(FirstInput);
    new_block.append(SecondInput);
    new_block.append(UpButton);
    new_block.append(DownButton);
    new_block.append(DeleteButton);

    new_block.id = count;
    FirstInput.id = "FirstInput" + count;
    SecondInput.id = "SecondInput" + count;
    UpButton.id = "UpButton" + count;
    DownButton.id = "DownButton" + count;
    DeleteButton.id = "DeleteButton" + count;

    UpButton.onclick = Up;
    DownButton.onclick = Down;
    DeleteButton.onclick = Delete;

    UpButton.textContent = "↑";
    DownButton.textContent = "↓";
    DeleteButton.textContent = "x";
}

function Up(){
    var id = Number(this.parentNode.id);
    if (id > 1) {
        var temp = document.getElementById("FirstInput" + (id - 1)).value;
        document.getElementById("FirstInput" + (id - 1)).value = document.getElementById("FirstInput" + id).value;
        document.getElementById("FirstInput" + id).value = temp;
        var temp = document.getElementById("SecondInput" + (id - 1)).value;
        document.getElementById("SecondInput" + (id - 1)).value = document.getElementById("SecondInput" + id).value;
        document.getElementById("SecondInput" + id).value = temp;           

    }
}

function Down(){
    var id = Number(this.parentNode.id);
    if (id < count) {
        var temp = document.getElementById("FirstInput" + (id + 1)).value;
        document.getElementById("FirstInput" + (id + 1)).value = document.getElementById("FirstInput" + id).value;
        document.getElementById("FirstInput" + id).value = temp;
        var temp = document.getElementById("SecondInput" + (id + 1)).value;
        document.getElementById("SecondInput" + (id + 1)).value = document.getElementById("SecondInput" + id).value;
        document.getElementById("SecondInput" + id).value = temp;           

    }
}

function Delete(){
    var id = this.parentNode.id;
    this.parentNode.remove();

    for(id++ ;id <= count;id++){
        document.getElementById("FirstInput" + id).id = "FirstInput" + (id - 1);
        document.getElementById("SecondInput" + id).id = "SecondInput" + (id - 1);
        document.getElementById("UpButton" + id).id = "UpButton" + (id - 1);
        document.getElementById("DownButton" + id).id = "DownButton" + (id - 1);
        document.getElementById("DeleteButton" + id).id = "DeleteButton" + (id - 1);
        document.getElementById(id).id = id - 1;
    }

    count--;
}

function Save(){
    var newOutput = document.createElement("div");
    newOutput.style.fontFamily = "Calibri";
    newOutput.innerHTML += '{';
    for(var id = 1; id <= count; id++){
        newOutput.innerHTML += ('"' + document.getElementById("FirstInput" + id).value  + "\":");
        newOutput.innerHTML += ('"' + document.getElementById("SecondInput" + id).value + '"');
        
        if (id != count) newOutput.innerHTML += ',';
    }
    newOutput.innerHTML += '}';
    document.body.append(newOutput);
}
