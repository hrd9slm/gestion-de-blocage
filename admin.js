/* ************* session user  *********************** */
let user_session= JSON.parse(sessionStorage.getItem("user"));
if (user_session.role==="admin"){
let user_id=user_session.id;
/*************data ********************** */
let data = localStorage.getItem("users");
let data_trainer = localStorage.getItem("users_trainer");
let filteredUser = JSON.parse(data).filter(user => user.id === user_id);

// console.log("filteredUser",data_trainer);


    /* ***************** add nav user name ********** */
   let name_position=document.getElementById("name");
   let nav_name =user_session.first_name.concat(" ", user_session.last_name);
   name_position.innerHTML=nav_name;

  /* ***************** logout ********** */
 let logoutSpan = document.getElementById("logout");
 logoutSpan.addEventListener("click", function() {
 sessionStorage.clear();
 window.location.href = "login.html"; 
 });
 
 /* *********** modals ************* */
    document.addEventListener("DOMContentLoaded", function() {
        // Get the buttons and modals
        var modalFeedback = document.getElementById("modal-background-admin");
        var modalShow = document.getElementById("modal-show");
    /******************************************** */
    document.querySelectorAll(".curs-feedback").forEach(button => {
        button.addEventListener("click", function() {
            let data = localStorage.getItem("users_trainer");
            let users = JSON.parse(data);
            let filteredUser = users.filter(user => user.id === user_id);
             var index = parseInt(this.getAttribute("data-index"));
             let blockage=filteredUser[0].blockages[index];
                 modalFeedback.style.display = "block";
           // console.log(filteredUser[0].blockages[index]);
                
        document.getElementById("btn-feedback").addEventListener("click", function(e) {
        e.preventDefault();
            blockage.etat=true;
       //     console.log(blockage.etat);
              // Update localStorage
               let blockage_update=[];
               let data_update=[];
               users.map(function(user) {
                  let blocs=user.blockages;
                         if(user.id == user_id){           
                              blocs.map(function(bloc,e){
                               
                                     if(index===e){
                                             bloc.etat=blockage.etat;
                                                     }
                                  blockage_update.push(bloc); 
                                 });
                           }
                           data_update.push(user);
                          ;})
                    
                          localStorage.setItem('users_trainer', JSON.stringify(data_update));


                          /********************* student update */
                          var data = localStorage.getItem("users");
                          var filteredStudent = JSON.parse(data).filter(user => user.first_name ===filteredUser[0].blockages[index].student_first_name && user.last_name ===filteredUser[0].blockages[index].student_last_name );
                       
                          var blockages=filteredStudent[0].blockages;
                          var filtreBlockage=blockages.filter(blockage=> blockage.trainer === filteredUser[0].first_name);
                        
                        //   filtreBlockage.map((bloc,index)=>{
                        //     bloc.etat=true;
                        //     console.log("bloc:",index,":",bloc.etat);
                        //   })
                     
                      
                        //   if (!filteredTrainer[0].blockages) {
                        //    filteredTrainer.blockages = []; 
                        //    }
                        //    filteredTrainer[0].blockages.push(new_blockage_trainer);
                        //    console.log("------>filteredTrainer:",filteredTrainer[0].blockages);
                             let data_users_update=[];
                             data_blocs_update=[];
                             JSON.parse(data).map(function(user) {

                                console.log("**********************   debut de user **********************");
                                         if(user.first_name ===filteredUser[0].blockages[index].student_first_name && user.last_name ===filteredUser[0].blockages[index].student_last_name ) {
                                            
                
                                                    user.blockages.map(bloc=>{
                                                        
                                                    //console.log(filteredUser[0]);
                                                        //console.log("***************");
                                                        //console.log("user.first_name",bloc.title );
                                                        //console.log("trainer.student",filteredUser[0].blockages[index].title );
                                                        //console.log("****************");
                                                            if(bloc.trainer === filteredUser[0].first_name && bloc.title===filteredUser[0].blockages[index].title ){
                                                                console.log("salma");
                                                                console.log(user);
                                                                bloc.etat=true;
                                                                }
                                                            })
                                        }     
                                        console.log(user);
                                        //console.log("----------------->");
                                        console.log("*************************   fin de user  *********************");
                                        console.log("                                               ");
                                            data_users_update.push(user);      
                                          })
            
                             localStorage.setItem('users',JSON.stringify(data_users_update));
                             
                            // console.log(JSON.parse(localStorage.getItem('users')));
                          /*********** close */
             modalFeedback.style.display = "none";
             readAll(user_id);
});
             
        
        });
    });
      /******************************************************** */
        // Add event listeners to show show modal
        var cursShowButtons = document.querySelectorAll(".curs-show");
        cursShowButtons.forEach(function(button) {
            button.addEventListener("click", function() {

                var index = parseInt(this.getAttribute("data-index"));
             var data = localStorage.getItem("users_trainer");
             var parsedData = JSON.parse(data);
             var filteredUser = parsedData.filter(user => user.id === user_id);
             var blockages = filteredUser[0].blockages;

             if (index >= 0 && index < blockages.length) {
                 var blockage = blockages[index];
                 document.getElementById("modal-title-show").value = blockage.title;
                 document.getElementById("modal-brief-show").value = blockage.brief;
                 document.getElementById("modal-text-show").value = blockage.difficulty;
                 console.log( 'title',blockage.title);

                 var modal_show = document.getElementById("modal-show");
                  modal_show.style.display = "block";}
            });
        });
    
        // Close the modals when the close button is clicked
        var closeButtons = document.querySelectorAll(".close");
        closeButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                modalFeedback.style.display = "none";
                modalShow.style.display = "none";
            });
        });
    
        // Close the modals when clicking outside the modal content
        window.addEventListener("click", function(event) {
            if (event.target == modalFeedback || event.target == modalShow) {
                modalFeedback.style.display = "none";
                modalShow.style.display = "none";
            }
        });
    });


    /* ************** textarea ******** */
    document.addEventListener("DOMContentLoaded", function() {
        var option1 = document.getElementById("option1");
        var option2 = document.getElementById("option2");
        var option3 = document.getElementById("option3");
    
        var textarea1 = document.querySelector("textarea[name='option1']");
        var textarea2 = document.querySelector("textarea[name='option2']");
        var textarea3 = document.querySelector("textarea[name='option3']");
    
        option1.addEventListener("change", function() {
            if (option1.checked) {
                textarea1.style.display = "block";
                textarea2.style.display = "none";
                textarea3.style.display = "none";
            }
        });
    
        option2.addEventListener("change", function() {
            if (option2.checked) {
                textarea1.style.display = "none";
                textarea2.style.display = "block";
                textarea3.style.display = "none";
            }
        });
    
        option3.addEventListener("change", function() {
            if (option3.checked) {
                textarea1.style.display = "none";
                textarea2.style.display = "none";
                textarea3.style.display = "block";
            }
        });
    });
    /************************** */

    
/*    ************ function redAll() *********** */

function readAll(id) {
    let data = localStorage.getItem("users_trainer");
    let tr = document.getElementById("table-tr");
    if (data !== null) {
        let users = JSON.parse(data);
        let filteredUser = users.filter(user => user.id === id);
        if (filteredUser.length > 0) {
            let tableContent = "";
            let blockages = filteredUser[0].blockages; 


            blockages.forEach((blockage, index) => {
                if(blockage.etat===true){var icon=true;}
                if(blockage.etat===false){var icon=false;}
                
        
                tableContent += `
                    <tr>
                    
                        <td>${blockage.student_first_name +" "+blockage.student_last_name}</td>
                        <td>${blockage.date}</td>
                        <td>
                            <button class="btn-icon curs-show"  data-index="${index}">
                                <span class="material-symbols-outlined">visibility</span>
                            </button>
                        </td>
                        <td>
                        <span class="material-symbols-outlined edit" data-index="${index}" style="display: ${icon ? 'block' : 'none'}" >check_box</span>
                        <span class="material-symbols-outlined delete" data-index="${index}" style="display: ${icon ? 'none' : 'block'}">indeterminate_check_box</span>
                        </td>
                        <td>
                            <button class="btn-icon curs-feedback" data-index="${index}" style="color:#6495ed ;">
                                <span class="material-symbols-outlined">chat</span>
                            </button>
                        </td>
                    </tr>
                `;
               
            });
           
          
            tr.innerHTML = tableContent;
        } else {
            console.log("Utilisateur non trouvé avec l'ID spécifié");
        }
    }
}
readAll(user_id);

}
else{
    window.location.assign("login.html");
}
