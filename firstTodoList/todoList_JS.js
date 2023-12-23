let inputText = document.getElementById('inputText');
let addList = document.getElementById('addList');
let makeList = document.getElementById('makeList');

/*function saveList () { 
    let toList = [];
    localStorage.setItem("TOLIST", JSON.stringify(toList));
};

const savedtoList = localStorage.getItem("TOLIST");

if (savedtoList !== null) {
    const parsetoList = JSON.parse(savedtoList);
    toList = parsetoList;
    parsetoList.forEach(saveList);
};*/

function maketodo () {
    let list = document.createElement('li');
    list.style.marginTop = '10px';
    list.style.listStyle = 'circle';

    let listdelete = document.createElement('button');
    listdelete.style.float = 'right';
    listdelete.style.marginRight = '3px';
    listdelete.style.cursor = 'pointer';
    listdelete.textContent = "❌";

    if(!inputText.value) {
        alert('할 일이 입력되지 않았습니다. 다시 입력하세요.');
    }
    
    else {
        list.innerText = inputText.value;
        makeList.appendChild(list);
        list.appendChild(listdelete);
        inputText.value = "";
    }

    list.addEventListener('click', () => {
        list.style.textDecoration = "line-through";
    })

    listdelete.addEventListener('click', () => {
        makeList.removeChild(list);
        list.removeChild(listdelete);
    })
};

inputText.addEventListener('keydown', () => {
    if(window.event.keyCode === 13) {
        maketodo();
        //saveList();
    }
})

addList.addEventListener('click', () => {
    maketodo();
    //saveList();
})