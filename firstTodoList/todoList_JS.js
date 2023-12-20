let inputText = document.getElementById('inputText');
let addList = document.getElementById('addList');
let inputList = document.getElementById('inputList');

function maketodo () {
    let list = document.createElement('li');
    list.style.marginTop = '10px';
    
    let listdelete = document.createElement('button');
    listdelete.style.marginRight = '3px';
    listdelete.style.cursor = 'pointer';
    listdelete.textContent = "삭제";

    if(!inputText.value) {
        alert('할 일이 입력되지 않았습니다. 다시 입력하세요.');
    }
    
    else {
        list.innerText = inputText.value;
        inputList.appendChild(list);
        list.appendChild(listdelete);
        inputText.value = "";
    }

    list.addEventListener('click', () => {
        list.style.textDecoration = "line-through";
    })

    listdelete.addEventListener('click', () => {
        inputList.removeChild(list);
        inputList.removeChild(listdelete);
    })
};

inputText.addEventListener('keydown', () => {
    if(window.event.keyCode === 13) {
        maketodo();
    }
})

addList.addEventListener('click', () => {
    maketodo();
})