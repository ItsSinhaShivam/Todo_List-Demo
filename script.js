
const getText=document.getElementById('res');
const setText=document.getElementById('setText');


function AddTask(){

    if(getText.value=="")
        alert("Enter  Text  First");
    else{
        let newValue=document.createElement('ul')
        newValue.innerHTML=`${getText.value}  <i class="fa-solid fa-trash"></i>`;
        setText.appendChild(newValue)
        getText.value="";

        newValue.addEventListener('click',function(){
            newValue.remove();
        })
    }
}