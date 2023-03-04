

var bookmarks;
if (localStorage.getItem("bookMark") == null) {
    bookmarks = [];
} else {
    bookmarks = JSON.parse(localStorage.getItem("bookMark"));
}

// function of validate and create and add markbook to array 
function addMark() {

    var markname = document.getElementById("name").value;
    var markurl = document.getElementById("url").value;
    document.getElementById("alert").style.display = 'none';

    //validation part
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].name == markname) {
            document.getElementById("alert").innerHTML = "this name already exist";
            validation();
            return;
        }
        if (bookmarks[i].url == markurl) {
            document.getElementById("alert").innerHTML = "this URL already exist";
            validation();
            return;
        }

    }

    // add to array part
    mark = {
        name: markname,
        url: markurl
    }

    bookmarks.push(mark);
    localStorage.setItem("bookMark", JSON.stringify(bookmarks));
    display();
    clr();
}

// function to clear data from inputs 
function clr() {
    document.getElementById("name").value = "";
    document.getElementById("url").value = "";
}


// function of display bookmarks in array 
display();
function display() {
    var trs = "";
    for (var i = 0; i < bookmarks.length; i++) {
        trs += `  <tr class="bg-grad">
                    <td class="fs-4  p-4 fw-bold">${bookmarks[i].name}</td>
                    <td class=" p-4">
                        <button class="btn btn-primary " onclick="vist(${i})">visit</button>
                        <button class="btn btn-danger" onclick='dlt(${i})'>delete</button>
                    </td>
                </tr>`
    }
    document.getElementById("tbody").innerHTML = trs;
}


// funtion to go for the needed page 
function vist(index) {
    window.open(bookmarks[index].url);
}


// funtion to delete from array 
function dlt(index) {
    bookmarks.splice(index,1);
    console.log(bookmarks);
    localStorage.setItem("bookMark", JSON.stringify(bookmarks));
    display();
}



function validation() {
    document.getElementById("alert").style.display = 'block';
}