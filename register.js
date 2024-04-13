let currentDate = new Date(); 
let year = currentDate.getFullYear(); 
let month = currentDate.getMonth() + 1; 
let day = currentDate.getDate(); 
let formattedDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);

   let data=localStorage.getItem("users");
   //console.log(data);
   var register_compter=2;
  if (data==null){
   
    let user={id:0,
      first_name:"admin",
      last_name:"admin",email:"admin@gmail.com",
      password:"123456",
      role:"admin"};
    let user1 = {
      id: 1,
      first_name: "salma",
      last_name: "salma",
      email: "salma@gmail.com",
      password: "123456",
      role: "student",
      blockages: [{
        formateur:"ahmed",
        bootcamp:"Mern",
        title:"mon premier blockage",
        brief:"Brief 1",
        difficulte:"qwee tdhdb cjvb",
        date_creation:formattedDate
  
      },{
        formateur:"ali",
        bootcamp:"Mern",
        title:"mon 2 eme blockage",
        brief:"Brief 1",
        difficulte:"qwee tdhdb cjvb",
        date_creation:formattedDate,
        feedback:""
  
      }] 
  };
    let users=[user,user1];
    let data=localStorage.setItem("users",JSON.stringify(users));

   }
/* *********** register ********** */
function register(){

    let user={id:register_compter,
      first_name:document.getElementById("first-name").value,
      last_name:document.getElementById("last-name").value,
      email:document.getElementById("email").value,
      password:document.getElementById("password").value,
      role:"student",
      blockages:[]};

    let local_users_tab=JSON.parse(localStorage.getItem("users"));

     local_users_tab.push(user);

     localStorage.setItem("users",JSON.stringify(local_users_tab));

    alert(localStorage.getItem("users"));

    register_compter+=1;
    sessionStorage.setItem("user",JSON.stringify(user));
     window.location.assign("student-dash.html");
   }
   let register_btn=document.getElementById("register-btn");

   register_btn.addEventListener("click",register);