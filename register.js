let currentDate = new Date(); 
let year = currentDate.getFullYear(); 
let month = currentDate.getMonth() + 1; 
let day = currentDate.getDate(); 
let formattedDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);

   let data=localStorage.getItem("users");
   var register_compter=5;
/* *********** register ********** */
function register(){

    let user={id:register_compter,
      first_name:document.getElementById("first-name").value,
      last_name:document.getElementById("last-name").value,
      email:document.getElementById("email").value,
      password:document.getElementById("password").value,
      role:"student",
      blockages:[],
    };


    let local_users_tab=JSON.parse(localStorage.getItem("users"));

     local_users_tab.push(user);

     localStorage.setItem("users",JSON.stringify(local_users_tab));

    register_compter+=1;
    sessionStorage.setItem("user",JSON.stringify(user));
     window.location.assign("student-dash.html");
   }
   let register_btn=document.getElementById("register-btn");

   register_btn.addEventListener("click",register);