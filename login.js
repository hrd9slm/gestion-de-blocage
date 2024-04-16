let currentDate = new Date(); 
let year = currentDate.getFullYear(); 
let month = currentDate.getMonth() + 1; 
let day = currentDate.getDate(); 

let formattedDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);

console.log(formattedDate);

   let data=localStorage.getItem("users");
   let data_trainer=localStorage.getItem("users_trainer");
   //console.log(data);
   var register_compter=5;
  if (data==null){
 
   
    let user1 = {
      id: 1,
      first_name: "salma",
      last_name: "salma",
      email: "salma@gmail.com",
      password: "123456",
      role: "student",
      blockages: [] 
  };
  let user2={id:2,
    first_name:"Trainer 1",
    last_name:"admin",
    email:"Trainer1@gmail.com",
    password:"123456",
    blockages:[],
    role:"admin"};
    let user3={id:3,
      first_name:"Trainer 2",
      last_name:"admin",
      email:"Trainer2@gmail.com",
      password:"123456",
      blockages:[],
      role:"admin"};
      let user4={id:4,
        first_name:"Trainer 3",
        last_name:"admin",
        email:"Trainer3@gmail.com",
        password:"123456",
        blockages:[],
        role:"admin"};
      
    
    let users=[user1,user2,user3,user4];
    let users_trainer=[user2,user3,user4];
    let data=localStorage.setItem("users",JSON.stringify(users));
    let data_trainer=localStorage.setItem("users_trainer",JSON.stringify(users_trainer));

   }
   /* ********  hundle form ************* */
   function handleSubmit(event) {
    event.preventDefault(); 
    return false;
}

  /* ********  login ************* */
  function auth(){
    
    let login_form=document.getElementById("login-form");
      var email=document.getElementById("email").value;
      var password=document.getElementById("password").value;
      let data=JSON.parse(localStorage.getItem("users"));

     console.log("data-auth",data);

     let flag=false;

     data.map((element)=>{
       if(email==element.email && password==element.password && element.role=="admin"){
         flag=true;
         sessionStorage.setItem("email", email);
         sessionStorage.setItem("password", password);
         console.log("email",email);
         console.log("password",email);
         let session_user=sessionStorage.setItem("user",JSON.stringify(element));
         return  window.location.assign("admin-dash.html");
       }
       else if(email==element.email && password==element.password && element.role=="student"){
         flag=true;
         sessionStorage.setItem("email", email);
         sessionStorage.setItem("password", password);
         console.log("email",email);
         console.log("password",email);
         let session_user=sessionStorage.setItem("user",JSON.stringify(element));
         return   window.location.assign("student-dash.html");
       }
     })
     if (flag==false){
       alert("email ou mot de pass invalid");
      }
     
    }

  /* ******* redirect register ********** */
  function register_redirect(){
   window.location.assign("register.html")}
   
/* *********** register ********** */
  function register(){

    let user={id:register_compter,
      first_name:document.getElementById("first-name").value,
      last_name:document.getElementById("last-name").value,
      email:document.getElementById("email").value,
      password:document.getElementById("password").value,
      role:"student"};
      
      let session=sessionStorage.setItem("user",JSON.stringify(user));
      console.log("user");
       let local_users_tab=JSON.parse(localStorage.getItem("users"));

     local_users_tab.push(user);

     localStorage.setItem("users",JSON.stringify(local_users_tab));

    alert(localStorage.getItem("users"));

    register_compter+=1;
 
  
   }
   /* ************* *appel des fonctions ************* */
   let btn_login=document.getElementById("btn-login");
   let btn_register=document.getElementById("btn-register");

   btn_login.addEventListener("click", auth);
   btn_register.addEventListener("click", register_redirect);