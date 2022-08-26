document.querySelector(".ok").addEventListener('click', function(){
    Swal.fire("We have recieved your request", "We will get back to you!", "success");
  });


function check1() {
    if(document.getElementById('name').value !="")
        document.getElementById('mail').disabled = false;
    else
    document.getElementById('mail').disabled = true;    
}  
function check2() {
    if(document.getElementById('mail').value !="")
        document.getElementById('num').disabled = false;
    else
    document.getElementById('num').disabled = true;    
}  
function check3() {
    if(document.getElementById('num').value !="")
        document.getElementById('rname').disabled = false;
    else
    document.getElementById('rname').disabled = true;    
} 
function check4() {
    if(document.getElementById('rname').value !="")
        document.getElementById('city').disabled = false;
    else
    document.getElementById('city').disabled = true;    
} 
function check5() {
    if(document.getElementById('city').value !="")
        document.getElementById('state').disabled = false;
    else
    document.getElementById('state').disabled = true;    
} 
function check6() {
    if(document.getElementById('state').value !="")
        document.getElementById('text').disabled = false;
    else
    document.getElementById('text').disabled = true;    
} 
function check7() {
    if(document.getElementById('text').value !="")
        document.getElementById('submit').disabled = false;
    else
    document.getElementById('submit').disabled = true;    
} 
