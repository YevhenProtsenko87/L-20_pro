const menu = document.querySelector('.menu');

console.log(menu)

const body  = document.querySelector('body');

body.addEventListener('contextmenu', event => {
    event.preventDefault();
    console.log('contextmenu');
    document.getElementsByClassName('menu')[0].style.visibility = "visible";
    menu.style.top = `${event.clientY}px`;
    menu.style.left = `${event.clientX}px`;
}, false);

document.addEventListener('click', event => {
    if (event.button !== 2) {
        document.getElementsByClassName('menu')[0].style.visibility = "hidden";
    }
}, false);

menu.addEventListener("click", event => {
    event.stopPropagation();
}, false);

class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); 
    }

    Open() { console.log('Open');}
    Refresh() { console.log('Refresh');}
    Save() { console.log('Save');}
    Edit() { console.log('Edit');}
    Delete() { console.log('Delete');}

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }

  new Menu(menu);