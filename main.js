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
        editButton.innerHTML = '<i class="fas fa-edit"></i>';

        container.appendChild(box);
        box.appendChild(input);
        box.appendChild(editButton);
        box.appendChild(removeButton);
    }
}

new item("sport");
new item("TV");
