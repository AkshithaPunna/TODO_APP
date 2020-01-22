const container = document.querySelector('.container');
var input = document.querySelector('#input');
const add = document.querySelector('#add');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.disabled = true;
        input.type = "text";
        input.classList.add('input_item');
        input.value = itemName;

        let box = document.createElement('div');
        box.classList.add('items');

        let editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        // editButton.appendChild('<i class="fas fa-edit"></i>');

        let removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.innerHTML = '<i class="fas fa-trash"></i>';

        container.appendChild(box);
        box.appendChild(input);
        box.appendChild(editButton);
        box.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edits(input));
        removeButton.addEventListener('click', () => this.remove(box));
    }
    
        edits(input){
        input.disabled = !(input.disabled);
    }

    remove(item){
        container.removeChild(item);
    }
    
}

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

add.addEventListener('click' , check);
