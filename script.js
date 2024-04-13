
// let currentDate = new Date(); 
// let year = currentDate.getFullYear(); 
// let month = currentDate.getMonth() + 1; 
// let day = currentDate.getDate(); 
// let formattedDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);

//    let data=localStorage.getItem("users");
//    //console.log(data);

//   if (data==null){
//     var register_compter=2;
//     let user={id:0,
//       first_name:"admin",
//       last_name:"admin",email:"admin@gmail.com",
//       password:"123456",
//       role:"admin"};
//     let user1 = {
//       id: 1,
//       first_name: "salma",
//       last_name: "salma",
//       email: "salma@gmail.com",
//       password: "123456",
//       role: "student",
//       blockages: [{
//         formateur:"ahmed",
//         bootcamp:"Mern",
//         title:"mon premier blockage",
//         brief:"Brief 1",
//         difficulte:"qwee tdhdb cjvb",
//         date_creation:formattedDate
  
//       },{
//         formateur:"ali",
//         bootcamp:"Mern",
//         title:"mon 2 eme blockage",
//         brief:"Brief 1",
//         difficulte:"qwee tdhdb cjvb",
//         date_creation:formattedDate
  
//       }] 
//   };
//     let users=[user,user1];
//     let data=localStorage.setItem("users",JSON.stringify(users));

//    }
// //   console.log("users::::",localStorage.getItem("users"));
// //   console.log("type::",typeof((localStorage.getItem("users"))));
// //   console.log("parse::",JSON.parse(localStorage.getItem("users")));
// //   console.log("type::",typeof(JSON.parse(localStorage.getItem("users"))));

//   /* *************  modal add *********** */
//   // var modal = document.getElementById("modal-background");
//   //    var curs = document.getElementById("curs");
//   //    var spans = document.getElementsByClassName("close");
//   //    curs.onclick = function() {
//   //        modal.style.display = "block";
//   //      ;}
//   //      Array.from(spans).forEach(function(span) {
//   //        span.addEventListener('click', function() {
//   //          modal.style.display = "none";
//   //        });
//   //      });
//   //      window.onclick = function(event) {
//   //        if (event.target == modal) {
//   //          modal.style.display = "none";
//   //        }
//   //      }
//   /* *************  modal update *********** */
// //      var modal_update = document.getElementById("modal-background-update");
// //        var curs_update = document.getElementById("curs-update");
// //        var spans = document.getElementsByClassName("close");
     
   
// //        curs_update.onclick = function() {
// //            modal_update.style.display = "block";
// //          ;}

// //          Array.from(spans).forEach(function(span) {
// //            span.addEventListener('click', function() {
// //              modal_update.style.display = "none";
// //            });
// //          });

// //          window.onclick = function(event) {
// //            if (event.target == modal_update) {
// //               modal_update.style.display = "none";
// //            }
// //          }

// // /* *************  modal blockage *********** */
// //  var modal_blockage = document.getElementById("modal-background-blockage");
// //  var curs_blockage = document.getElementById("curs-blockage");
// //  var spans = document.getElementsByClassName("close");

// //  curs_blockage.onclick = function() {
// //      modal_blockage.style.display = "block";
// //    ;}

// //    Array.from(spans).forEach(function(span) {
// //      span.addEventListener('click', function() {
// //        modal_blockage.style.display = "none";
// //      });
// //    });

// //    window.onclick = function(event) {
// //      if (event.target == modal_blockage) {
// //         modal_blockage.style.display = "none";
// //      }
// //    }

//   /* ***********modal feedback ****** */
//     //    var modal_feedback = document.getElementById("modal-background-admin");
//     //  var curs_feedback = document.getElementById("curs-feedback");
//     //  var span3 = document.getElementsByClassName("close")[0];

//     //  curs_feedback.onclick = function() {
//     //      modal_feedback.style.display = "block";
//     //    ;}

//     //    span3.onclick = function() {
//     //      modal_feedback.style.display = "none";
//     //    };
      
//     //    window.onclick = function(event) {
//     //      if (event.target == modal_update) {
//     //        modal.style.display = "none";
//     //      }
//     //    }
//   /* ********  hundle form ************* */
//   function handleSubmit(event) {
//     event.preventDefault(); 
//     return false;
// }
// /* ************** redirect login *********** */
// function redirectToStudentDashboard() {
  
//   window.location.assign("student-dash.html");
  
//   readAll(id);
 

// }
//   /* ********  login ************* */
//   function auth(){
    
//     let login_form=document.getElementById("login-form");
//       var email=document.getElementById("email").value;
//       var password=document.getElementById("password").value;
//       let data=JSON.parse(localStorage.getItem("users"));

//      console.log("data-auth",data);

//      let flag=false;

//      data.map((element)=>{
//        if(email==element.email && password==element.password && element.role=="admin"){
//          flag=true;
//          sessionStorage.setItem("email", email);
//          sessionStorage.setItem("password", password);
//          return  window.location.assign("admin-dash.html");
//        }
//        else if(email==element.email && password==element.password && element.role=="student"){
//          flag=true;
//          sessionStorage.setItem("email", email);
//          sessionStorage.setItem("password", password);
//          return  redirectToStudentDashboard();
//        }
//      })
//      if (flag==false){
//        alert("email ou mot de pass invalid");
//       }
     
//     }

//   /* ******* redirect register ********** */
//   function register_redirect(){
//    window.location.assign("register.html")}
   
// /* *********** register ********** */


//   function register(){
//     // let name=document.getElementById("first-name").value;
//     // let last_name=document.getElementById("last-name").value;
//     // let email=document.getElementById("email").value;
//     // let password=document.getElementById("password").value;

//     let user={id:register_compter,
//       first_name:document.getElementById("first-name").value,
//       last_name:document.getElementById("last-name").value,
//       email:document.getElementById("email").value,
//       password:document.getElementById("password").value,
//       role:"student"};

//     let local_users_tab=JSON.parse(localStorage.getItem("users"));

//      local_users_tab.push(user);

//      localStorage.setItem("users",JSON.stringify(local_users_tab));

//     alert(localStorage.getItem("users"));

//     register_compter+=1;
//      window.location.assign("student-dash.html");
//    }
    /* **************** student read all *************** */ 
    function readAll(id) {  
      let data = localStorage.getItem("users");
      let tr=document.getElementById("table-tr");
       if (data !== null) {
           // console.log("readAll",data);
           let users = JSON.parse(data);
            let filteredUser = users.filter(user => user.id === id);
            if (filteredUser.length > 0) {
              let tableContent = "";
              let blockages = filteredUser[0].blockages; // Access the blockages array of the user
  
              // Loop over each blockage
              blockages.forEach(blockage => {
                  tableContent += `
                      <tr>
                          <td>${filteredUser[0].first_name} ${filteredUser[0].last_name}</td>
                          <td>${blockage.date_creation}</td>
                          <td><button class="btn-icon" id="curs-blockage"><span class="material-symbols-outlined">visibility</span></button></td>
                          <td><span class="material-symbols-outlined edit">check_box</span><span class="material-symbols-outlined delete">indeterminate_check_box</span></td>
                          <td><button class="btn-icon" id="curs-update"><span class="material-symbols-outlined edit">edit_square</span></button><button class="btn-icon"><span class="material-symbols-outlined delete">delete_forever</span></button></td>
                      </tr>
                  `;
              });
               tr.innerHTML = tableContent;
           } else {
               console.log("Utilisateur non trouvé avec l'ID spécifié");
           }
       }
  }
 
