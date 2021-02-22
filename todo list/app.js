let adds = document.getElementsByClassName('AddBtn');
let text = document.querySelectorAll('span')
console.log(text)
let checkToDo = document.querySelectorAll('.check')
console.log(checkToDo);
let deleteItems = document.querySelectorAll('.DelBtn');
console.log(deleteItems);
let list = document.getElementsByTagName('ul')
console.log(list)

//add element
const addForm = document.getElementById('input');
console.log(addForm);
addForm.addEventListener('submit', function(e){
    console.log('working');
     e.preventDefault()
     const textValue = addForm.querySelector('input[type="text"]').value;
     console.log(textValue);

     //create elements
        const li = document.createElement('li');
        const radio = document.createElement('input');
                radio.setAttribute("type", "radio");
                    document.body.appendChild(radio);
        const text = document.createElement("span");
        const butt = document.createElement("button");

        //add classes
        radio.classList.add('check')
        li.classList.add("listItem");
        butt.classList.add("DelBtn")
        //apped to the li
        li.appendChild(radio);
        li.appendChild(text);
        li.appendChild(butt);
        for (let i = 0; i < list.length; i++) {
            list[i].appendChild(li)
            
                }

        //text content
               text.textContent =textValue;
        butt.textContent = "Done"; 

})

// remove item
for(let i=0; i<list.length; i++){
    list[i].addEventListener('click',  function(e){
        console.log('button is on');
        console.log(e.target);
        //get target
        if(e.target.classList.contains("DelBtn")) {
            const li = e.target.parentElement;
            console.log(li)
           li.remove()
        }
        })
    
}
//span
for(let i=0; i<text.length; i++){
    text[i].style.display ='block'
}


//check emement radio button
radioBtns = Array.from(checkToDo);
console.log(radioBtns)
radioBtns.forEach(function(radioBtn){
    radioBtn.addEventListener('click', function(e){
        radioBtn.classList.toggle('active');
        e.target.nextElementSibling.className = 'strike'
        
    })
})
