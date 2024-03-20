const btn1= document.getElementById('btn1')
console.log(btn1)
const featuredquizzes=document.getElementsByClassName('featuredquizzes')
// const container=document.getElementById('container')
console.log(featuredquizzes,container )
function myfunction() {  
  }
const navbar=document.getElementById('nav-bar')
  const checkBox=document.getElementById('checkBox');
const textContent=document.getElementById('text-content')
const wholeFile=document.getElementById('wholeFile')

// console.log(btn123)
  checkBox.addEventListener('change',function()
  {
    if(this.checked)
    {
      navbar.style.backgroundColor="black";
      wholeFile.style.backgroundColor="black";
      textContent.style.color="white";
      

    }
    else{
      navbar.style.backgroundColor=""
      wholeFile.style.backgroundColor="";
      textContent.style.color=""
     
    }
  })


 