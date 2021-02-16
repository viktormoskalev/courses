function isolatedpopup133(){
    const popup133 = document.querySelectorAll(".popup133");

    for  ( let i = 0 ; i<popup133.length;i++){
        popup133[i].addEventListener("click" ,showpopup133);
        popup133[i].addEventListener("keypress", showpopup133 )
    };
    
    function showpopup133(){
        this.classList.add("popup133-open");
    }
}

try{
    isolatedpopup133();
} catch{}




function isolatedswitchcard(){
    let cards133 = document.querySelectorAll(".card-switch");

    
    
    function switchcards(elem) {
        let windowHeight133 = window.innerHeight;
        let scrollY133 = window.scrollY || window.pageYOffset;
        let scrollPosition133 = scrollY133 + windowHeight133;
        let elementPosition133 = elem.getBoundingClientRect().top + scrollY;
           

        if (scrollPosition133 > elementPosition133) {
         elem.classList.add("animated");
        }
      }

      document.addEventListener("scroll",  function(){
       
        for(let i=0 ; i<cards133.length; i++){
            switchcards(cards133[i]);      
          }    
      } );

      for(let i=0 ; i<cards133.length; i++){
              switchcards(cards133[i]);  
            cards133[i].addEventListener("click" , function(){
            cards133[i].classList.add("card-switch-open");
        })
            cards133[i].addEventListener("keypress" , function(){
            cards133[i].classList.add("card-switch-open");
        })
      }

}


try{
    isolatedswitchcard();
} catch{};




//form interview


function intervievFormContainer(question ,answer, infoText ,parentClass){


    let interview= document.querySelector("."+parentClass);
    const questionNum = interview.querySelector(".interview-question-number");
    const questionText = interview.querySelector(".interview-question-text");
    const answers = interview.querySelector(".interview-answers");
    // const img = interview.querySelector(".interview-img");
    const infoTextTag = interview.querySelector(".interview-info-text");
    const modalErrorTag = interview.querySelector(".interview-modal-error");
    const modalErrorCloseTag = interview.querySelector(".interview-modal-error-close");
    const modalContinue = interview.querySelector(".interview-modal-continue");
    const modalContinueTitle = interview.querySelector(".interview-modal-continue-title");
    const modalContinueDescription = interview.querySelector(".interview-modal-continue-description");
    const modalContinueButton = interview.querySelector(".interview-modal-continue-button");


    let ii = 0;
    let wrongCounter=0;
    let answerCalc =[];

    modalContinueButton.addEventListener("click" ,function(){
        modalContinue.style.opacity="0";
        modalContinue.style.pointerEvents="none";
     
        if(modalContinueButton.innerHTML=="Continue"){
            interviewForm();
            wrongCounter=0;
        } else{
            wrongCounter++;
            if(wrongCounter>1){
                interviewForm();
          
                wrongCounter=0;
            } 
        }

    
        })

    modalErrorCloseTag.addEventListener("click" , function( ){
        modalErrorTag.style.display="none";
    })

    function interviewForm(){
        
        if(answer[ii]){
           
            if(answer[ii][0]!=="stop"){

                answers.innerHTML="";
                for(let i = 0 ; i<answer[ii].length-1; i++){
                        answers.innerHTML+=`  <input class="interview-answers-input"  type="radio" id="answer${i}" name="answers">`;
                          answers.innerHTML+=` <label class="interview-answers-label"  for="answer${i}">  ${answer[ii][i]} </label>`
              }
            }
            if(answer[ii][0]=="stop"){
                answers.innerHTML=answer[ii][1];
      
            }
        }
            if(infoText[ii]){
                
                infoTextTag.innerHTML=(infoText[ii]);
            }
            if(question[ii]){
                questionNum.innerHTML=ii+1;
                questionText.innerHTML=(question[ii]);
                ii++;
            } else {
                answers.innerHTML=answerCalc;
            }
    
     
         
           
   }    
   try{
    interviewForm();
   } catch(e){
    console.log(e + " no answers");
   }

        

            function showModalContinue(rightOrNo){
         

                if(rightOrNo){
                    modalContinueTitle.innerText="Correct";
                    modalContinueDescription.innerHTML="That is right. <br> You selected the correct response.";
                    modalContinueButton.innerText="Continue";
                    modalContinue.style.opacity="1";
                    modalContinue.style.pointerEvents="all";
             

                } else {
                    modalContinueTitle.innerText="Incorrect";
                    modalContinueDescription.innerHTML="That is incorrect. <br> Please try again";
                    modalContinueButton.innerText="Try again";
                    modalContinue.style.opacity="1";
                    modalContinue.style.pointerEvents="all";
                   
                }



            }

            

        interview.querySelector(".interview-button").addEventListener("click" , function(){

           let answersInput=  answers.querySelectorAll("input");
            let checkedAnswer =false;
            for( let i=0; i<answersInput.length; i++ ){
              if(answersInput[i].checked ){
                checkedAnswer=i+1;
              }
            }
            if(checkedAnswer){       
              if(checkedAnswer== answer[ii-1][answer[ii-1].length-1]){
                answerCalc[ii]= ii+" Правильно "+ " <br>";
                showModalContinue(true);

              } else{
                answerCalc[ii]= ii+" Неправильно "+ " <br>";
                showModalContinue(false);
              }
                
            


            } else{
                modalErrorTag.style.display="flex";
            }
     

        } );

        //drag%drop




        function dragSdrop(){
            console.log("start");
            const place = interview.querySelectorAll(".interview-drop-place");
            const dropItems = interview.querySelectorAll(".interview-drop");
          
            for (let i=0 ; i<place.length;i++){
                place[i].addEventListener("dragover", function(event){
                    event.preventDefault();
               })
               place[i].addEventListener("drop", function(event){
               
               let thismove = document.querySelector("."+ event.dataTransfer.getData('class'))
               thismove.style.opacity=1;
               this.appendChild(thismove);
               })

            }
            
  
            
            for(let i =0 ; i<dropItems.length; i++){
                dropItems[i].addEventListener("dragstart", droper);
            }
            

            
            let tuchstatus=0;
            
            interview.addEventListener('touchstart' , function(event){
                    if(event.target.classList.contains("interview-drop")){


                        for (let i=0 ; i<dropItems.length;i++){
                          
                            dropItems[i].classList.remove("fly-block");
                            dropItems[i].classList.remove("fly-text");
        
                        }
                        tuchstatus=event.target;

                        if(event.target.tagName!=="P"){
                            event.target.classList.add("fly-block");
                        } else{
                            event.target.classList.add("fly-text");
                        }
                        for (let i=0 ; i<place.length;i++){
                            console.log(i);
                            place[i].classList.add("place-animation");

                            place[i].addEventListener('touchstart' , function(event){
                                    event.target.appendChild(tuchstatus);
                                  
                                    for (let i=0 ; i<dropItems.length;i++){
                          
                                        dropItems[i].classList.remove("fly-block");
                                        dropItems[i].classList.remove("fly-text");
                    
                                    }
                                    for (let i=0 ; i<place.length;i++){
                          
                                        place[i].classList.remove("place-animation");

                              
                    
                                    }

                            })
                        }
                 
                }
                
            

                if(event.target.classList.contains("interview-drop")){
                    console.log(1234);
                }
         
            })
            
            
            
            
            function droper(event){
                
                console.log(this.classList[this.classList.length-1]);
                event.dataTransfer.setData('class',this.classList[this.classList.length-1])
            }
            



        }
        try{
            dragSdrop();
        } catch(e) {
            console.log("drag and drop: " + e)
        }
       




}

// const question = [];
// question[0]=" question 1 ";
// question[1]=" question 2 ";
// question[2]=" question 3 ";
// question[3]=" question 4 ";
// question[4]=" question 5 ";

// const answer =[];
// answer[0]=[];
// answer[0].push("stop");
// answer[0].push("Неправильный ответ");
// answer[0].push("Неправильный ответ");
// answer[0].push("Неправильный ответ");
// answer[0].push("Неправильный ответ");

// answer[0].push("правильный ответ");
// answer[0].push(6);
// answer[1]=[];
// answer[1].push("Неправильный ответ");
// answer[1].push("правильный ответ");
// answer[1].push("Неправильный ответ");
// answer[1].push("Неправильный ответ");
// answer[1].push(2) ;


// answer[2]=[];
// answer[2].push("Неправильный ответ");
// answer[2].push("Неправильный ответ");
// answer[2].push("правильный ответ");
// answer[2].push("Неправильный ответ");
// answer[2].push(3); //true
// answer[3]=[];
// answer[3].push("Неправильный ответ");
// answer[3].push("правильный ответ");
// answer[3].push("Неправильный ответ");
// answer[3].push("Неправильный ответ");
// answer[3].push(2); //true
// answer[4]=[];
// answer[4].push("Неправильный ответ");
// answer[4].push("lorem");
// answer[4].push("Неправильный ответ");
// answer[4].push("правильный ответ");
// answer[4].push(4); //true

// const infoText=[];
// infoText.push("select erte  answer and click submit");
// infoText.push("select your ergter and click submit");
// infoText.push("select erter your answerer and click submit");
// infoText.push("select your erte and click submit");


// intervievFormContainer( question ,answer, infoText , "interview1");




// drop


