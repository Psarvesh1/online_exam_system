function handleLogin(){
    var username = "nikhil"
    var password= "nikhil@123"
    var uname = document.getElementById("username").value;
    var upass = document.getElementById("password").value;
    if(uname == username && upass == password){
        window.location.href = "student_home.html"
    }else{
        alert('Please enter correct username and password!')
    }
}

function handleSubject1(){
    if(confirm('Are you sure you want to start the exam ?')) {
        console.log('Thing was saved to the database.');
        window.location.href = "c_exam.html";
    }else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function handleSubject2(){
    if(confirm('Are you sure you want to start the exam ?')) {
        console.log('Thing was saved to the database.');
        window.location.href = "c++_exam.html";
    }else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function handleSubject3(){
    if(confirm('Are you sure you want to start the exam ?')) {
        console.log('Thing was saved to the database.');
        window.location.href = "HTML_exam.html";
    }else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function handleSubject4(){
    if(confirm('Are you sure you want to start the exam ?')) {
        console.log('Thing was saved to the database.');
        window.location.href = "CSS_exam.html";
    }else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
