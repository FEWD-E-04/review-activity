/*
 1- Create an event listener in the button (add new item) that allows the user to add new items to the list and highlight each item when clicking on them.
 2- The heading <h2> should change the text accordingly to the highlighted list item. 
 */

// Selectors
const list = document.querySelector('#list');
const btn = document.getElementById('button');
const headline = document.getElementById('headline');
const listItems = document.querySelectorAll('#list');
let newItemCounter = 1;

// Iterate the ul items
for(const item of listItems) {
item.addEventListener('click', function(event) {
    if(event.target.nodeName == 'LI') {
        headline.innerHTML = event.target.innerHTML
        const list = event.target.parentNode.children
        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove('bg-warning')
        }
        event.target.classList.add('bg-warning')
    }
})
}
// Event Listener - Click the item change the heading

// Event Listener - Click the button add a new item

btn.addEventListener('click', function(event) {
    list.innerHTML += `<li class="border-bottom m-3"> Something new ${newItemCounter} </li>`
    newItemCounter++
})

/*Another solution */

// for(i = 0; i < listItems.length; i++) {
//   listItems[i].addEventListener('click', activateItem);
// }

// function activateItem (event) {
//   if(event.target.nodeName == 'LI') {
//     headline.innerHTML = event.target.innerHTML;
//     const list = event.target.parentNode.children;
//     for (i = 0; i < list.length; i++){
//       list[i].classList.remove('bg-warning');
//     }
//     event.target.classList.add('bg-warning');
//   } 
// }

// btn.addEventListener('click', createNewItem);

// function createNewItem() {
//   list.innerHTML += `<li class="border-bottom m-3"> Something new ${newItemCounter} </li>`
//   newItemCounter++
// }