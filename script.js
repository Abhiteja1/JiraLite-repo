let addCardbtn = document.querySelector(".addtaskbtn");
let todoContainer = document.querySelector("#todo");

addCardbtn.addEventListener("click", addtask);

// adding card 
function addtask(){
  let parentCard = document.createElement("div");
  parentCard.className="parentcard";
  let card = document.createElement("div");
  card.className="card";
  card.innerText="Add Task";
  card.setAttribute("contenteditable", "true");
  parentCard.append(card);
  todoContainer.append(parentCard);
  card.focus(); //pointer goes to editing box automatically

  // empty card should delete
  card.addEventListener("blur", (eventDetails)=>{
    
    let blurredCard = eventDetails.target;
    let parentOfBlurredCard = blurredCard.parentElement;
    if(blurredCard.innerText.trim()==""){
      parentOfBlurredCard.remove();
    }
  })

  //inner text should be removed when clicked
  card.addEventListener("click", (eventDetails)=>{
    let clickedCard = eventDetails.target;
    if(clickedCard.innerText == "Add Task"){
      clickedCard.innerText="";
    }
  })

  // adding selectors to card or dropdown
  let selector = document.createElement("select");
  selector.innerHTML=`
  <option value="todo">To Do</option>
  <option value="progress">Progress</option>
  <option value="completed">Completed</option>
  `
  parentCard.append(selector);

  // choosing option then task should move according to its status

  selector.addEventListener("change",(eventDetails)=>{
    let selectedOption = eventDetails.target.value;
    let selectedContainer = document.querySelector(`#${selectedOption}`)
    selectedContainer.append(parentCard);
  })
}





