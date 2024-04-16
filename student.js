/* ************* session user  *********************** */
let data=localStorage.getItem("users");
let user_session= JSON.parse(sessionStorage.getItem("user"));
if(user_session   && data){
        let user_id=user_session.id;
        
    /*************data ********************** */
    
    let data = localStorage.getItem("users");
    let data_trainer = localStorage.getItem("users_trainer");
    let filteredUser = JSON.parse(data).filter(user => user.id === user_id);
    
    
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
    
    
        /* ***************** add block ********** */
        document.getElementById("btn-add").addEventListener('click', function(event) {
            event.preventDefault(); 
              let currentDate = new Date(); 
              let year = currentDate.getFullYear(); 
              let month = currentDate.getMonth() + 1; 
              let day = currentDate.getDate(); 
              let formattedDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
      
      
            let new_blockage={
              trainer:document.getElementsByClassName("dropdown")[0].value,
              bootcamp:document.getElementsByClassName("dropdown")[1].value,
              title:document.getElementById("title").value,
              brief:document.getElementById("brief").value,
              difficulty:document.getElementById("textarea").value,
              date:formattedDate,
              etat:false,
           
            }
            
            if (!filteredUser[0].blockages) {
              filteredUser.blockages = []; 
              }
              filteredUser[0].blockages.push(new_blockage);
              let data_update=[];
              JSON.parse(data).map(function(user) {
              if(user.id == user_id){
              user.blockages=filteredUser[0].blockages;
                }
               data_update.push(user);
                  });
              localStorage.setItem('users',JSON.stringify(data_update));
           
    
              /*  **********  data admin *******/
             let new_blockage_trainer={
                 student_first_name:filteredUser[0].first_name ,
                 student_last_name:filteredUser[0].last_name,
                 bootcamp:document.getElementsByClassName("dropdown")[1].value,
                 title:document.getElementById("title").value,
                 brief:document.getElementById("brief").value,
                 difficulty:document.getElementById("textarea").value,
                 date:formattedDate,
                 etat:false
                 
               }
               console.log(new_blockage_trainer);
               let first_name = document.getElementsByClassName("dropdown")[0].value;
               let filteredTrainer = JSON.parse(data_trainer).filter(user => user.first_name === new_blockage.trainer);
               let data_trainer_update = [];
               
               JSON.parse(data_trainer).forEach(user => {
                   if (user.first_name === first_name) {
                           user.blockages.push(new_blockage_trainer);
                       
                   }
                   data_trainer_update.push(user);
               });
               
               localStorage.setItem('users_trainer', JSON.stringify(data_trainer_update));
               
               document.getElementById("modal-background").style.display="none";  
               document.getElementsByClassName("dropdown")[0].value="";
               document.getElementsByClassName("dropdown")[1].value=""; 
                document.getElementById("textarea").value="";      
                document.getElementById("brief").value="";  
                document.getElementById("title").value=""; 
                readAll(user_id);
              
                location.reload(true);  
           
            });
     /* ************* appel de fonction afficher ************ */
     document.addEventListener("DOMContentLoaded", function() {
      readAll(user_id);
    
      /* *************  modal update *********** */
      var spansUpdate = document.querySelectorAll("#modal-background-update .close");
      spansUpdate.forEach(span => {
          span.addEventListener('click', function() {
              var modal_update = document.getElementById("modal-background-update");
              modal_update.style.display = "none";
          });
      });
    
    
    
      var modal_update = document.getElementById("modal-background-update");
      window.addEventListener("click", function(event) {
       
        if (event.target ==  modal_update ) {
            modal_update.style.display = "none";
            
        }
    });
      /* *************  modal blockage *********** */
      var spansBlockage = document.querySelectorAll("#modal-background-blockage .close");
      spansBlockage.forEach(span => {
          span.addEventListener('click', function() {
              var modal_blockage = document.getElementById("modal-background-blockage");
              modal_blockage.style.display = "none";
          });
      });
    
    
    
      var modal_blockage = document.getElementById("modal-background-blockage");
      window.addEventListener("click", function(event) {
       
        if (event.target ==  modal_blockage ) {
            modal_blockage.style.display = "none";
            
        }
    });
    
      
    
      /* *************  modal add *********** */
      var modal = document.getElementById("modal-background");
      var curs = document.getElementById("curs");
      curs.onclick = function() {
          modal.style.display = "block";
      };
    
      var spansAdd = document.querySelectorAll("#modal-background .close");
      spansAdd.forEach(span => {
          span.addEventListener('click', function() {
              modal.style.display = "none";
          });
      });
    
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
    });
    
    
      /* *************  function show *********** */
    
    function showBlockage() {
        document.querySelectorAll(".curs-blockage").forEach(button => {
            button.addEventListener("click", function() {
              
               
                 var index = parseInt(this.getAttribute("data-index"));
                 var data = localStorage.getItem("users");
                 var parsedData = JSON.parse(data);
                 var filteredUser = parsedData.filter(user => user.id === user_id);
                 var blockages = filteredUser[0].blockages;
    
                 if (index >= 0 && index < blockages.length) {
                     var blockage = blockages[index];
                     document.getElementById("modal-title-show").value = blockage.title;
                     document.getElementById("modal-brief-show").value = blockage.brief;
                     document.getElementById("modal-text-show").value = blockage.difficulty;
    
                     var modal_blockage = document.getElementById("modal-background-blockage");
                     modal_blockage.style.display = "block";
                 } 
              
            });
        });
    }
    
    /* *************  update function *********** */
     function update_bloc() {
         document.querySelectorAll(".curs-update").forEach(button => {
             button.addEventListener("click", function() {
                 let currentDate = new Date(); 
                 let year = currentDate.getFullYear(); 
                 let month = currentDate.getMonth() + 1; 
                 let day = currentDate.getDate(); 
                 let formattedDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
                 var index = parseInt(this.getAttribute("data-index"));
            
    
                   var modal_update = document.getElementById("modal-background-update");
                   modal_update.style.display = "block";
    
                  // Populate modal with blockage data for editing
                 var blockage = filteredUser[0].blockages[index];
                 document.getElementById("dropdown")[0].value = blockage.trainer;
                 document.getElementById("dropdown")[1].value = blockage.bootcamp;
                 document.getElementById("title-update").value = blockage.title;
                 document.getElementById("brief-update").value = blockage.brief;
                 document.getElementById("textarea-update").value = blockage.difficulty;
                 let up1={ tariner:blockage.trainer,bootcamp:blockage.bootcamp,title:blockage.title,brief:blockage.brief,blockage:blockage.difficulty}
                  
                
                   //Add event listener to update button inside the modal
                  document.getElementById("btn-update-modal").addEventListener("click", function(e) {
                     e.preventDefault();
                    //   Update blockage data
                      blockage.title = document.getElementById("title-update").value;
                      blockage.brief = document.getElementById("brief-update").value;
                      blockage.difficulty = document.getElementById("textarea-update").value;
                      blockage.trainer=document.getElementById("dropdown")[0];
                      blockage.bootcamp=document.getElementById("dropdown")[1];
                      blockage.Date=formattedDate;
    
                      let up={ 
                         tariner:blockage.trainer,
                         bootcamp:blockage.bootcamp,
                         title:blockage.title,
                         brief:blockage.brief,
                         difficulty:blockage.difficulty,
                         date:blockage.Date}
                     
    
                      // Update localStorage
                      var data = localStorage.getItem("users");
                      var parsedData = JSON.parse(data);
                      var filteredUser = parsedData.filter(user => user.id === user_id);
                      let blockage_update=[];
                      let data_update=[];
                      filteredUser[0].blockages[index] = blockage;
                      parsedData.map(function(user) {
                         let blocs=user.blockages;
                                if(user.id == user_id){           
                                
                                     blocs.map(function(bloc,e){
                                       
                                            if(index===e){
                                                    bloc=up;
                                                            }
                                         blockage_update.push(bloc);
                                      
                                        });
                                     
                                  }
                                  data_update.push(user);
                               
                                 ;})
                                 localStorage.setItem('users', JSON.stringify(data_update));
                                          //Close the modal
                   modal_update.style.display = "none";
                    
                   // Refresh the table to reflect the changes
                               readAll(user_id);
                             })
                         })
                     })
                    
               };
    /*      ************* delete ********** */
    function delete_bloc() {
        document.querySelectorAll(".btn-delete").forEach(button => {
            button.addEventListener("click", function() {
                var index = parseInt(this.getAttribute("data-index"));
    
                var modal_confirm = document.getElementById("modal-background-delete");
                modal_confirm.style.display = "block";
    
             
                document.getElementById("btn-yes").addEventListener("click", function() {
                    var data = localStorage.getItem("users");
                    var parsedData = JSON.parse(data);
                    var filteredUser = parsedData.filter(user => user.id === user_id);
                    var blockages = filteredUser[0].blockages;
    
                    if (index >= 0 && index < blockages.length) {
                        blockages.splice(index, 1); 
                        localStorage.setItem('users', JSON.stringify(parsedData)); // Update localStorage
                        readAll(user_id); 
                    }
                   
                    modal_confirm.style.display = "none";
                });
    


                document.getElementById("btn-no").addEventListener("click", function() {
                    modal_confirm.style.display = "none";
                    location.reload();
                });
    
            });
        });
    }
    
         /* **************** readAll() ************** */
         function readAll(id) {
          let data = localStorage.getItem("users");
          let tr = document.getElementById("table-tr");
          if (data !== null) {
              let users = JSON.parse(data);
              let filteredUser = users.filter(user => user.id === id);
              if (filteredUser.length > 0) {
                  let tableContent = "";
                  let blockages = filteredUser[0].blockages; // Access the blockages array of the user
      
                  // Loop over each blockage
                  blockages.forEach((blockage, index) => {
                    let valid=blockage.etat;
                    if(blockage.etat===true){var icon=true;}
                    if(blockage.etat===false){var icon=false;}
                   
                    tableContent += `
                   
                    <tr>
                        <td>${blockage.title} </td>
                        <td>${blockage.date}</td>
                        <td><button class="btn-icon curs-blockage" data-index="${index}"><span class="material-symbols-outlined">visibility</span></button></td>
                        <td>
                        <span class="material-symbols-outlined edit" data-index="${index}" style="display: ${icon ? 'block' : 'none'}" >check_box</span>
                        <span class="material-symbols-outlined delete" data-index="${index}" style="display: ${icon ? 'none' : 'block'}">indeterminate_check_box</span>
                        </td>
                        <td><button class="btn-icon curs-update" data-index="${index}" ${valid === true ? 'disabled ' : ''} ><span class="material-symbols-outlined edit"${valid === true ? 'style="color:grey ;" ': ''} >edit_square</span></button>
                        <button class="btn-icon btn-delete" data-index="${index}"${valid === true ? 'disabled  ' : ''}><span class="material-symbols-outlined delete" ${valid === true ? 'style="color:grey ;" ': ''}>delete_forever</span></button></td>
                    </tr>
                `;
            });
                         tr.innerHTML = tableContent;
                
                    showBlockage();
                // delete function 
                update_bloc();
                  delete_bloc();
              } else {
                  console.log("Utilisateur non trouvé avec l'ID spécifié");
              }
          }
      }
    
    }
   
else{
    window.location.assign("login.html");
}
