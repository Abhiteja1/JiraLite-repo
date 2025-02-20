let addCardbtn = document.querySelector(".addtask");
let todoContainer = document.querySelector("#todo");

addCardbtn.addEventListener("click", addtask);

// adding card 
function addtask(){
  let card = document.createElement("div");
  card.className="card";
  card.innerText="Add Task";
  card.setAttribute("contenteditable", "true");
  todoContainer.append(card);
  card.focus(); //pointer goes to editing box automatically

  // empty card should delete
  card.addEventListener("blur", (eventDetails)=>{
    let blurredCard = eventDetails.target;
    if(blurredCard.innerText.trim()==""){
      blurredCard.remove();
    }
  })

  //inner text should be removed when clicked
  card.addEventListener("click", (eventDetails)=>{
    let clickedCard = eventDetails.target;
    if(clickedCard.innerText == "Add Task"){
      clickedCard.innerText="";
    }
  })

  // adding selectors to card
  let selector = document.createElement("select");
  selector.innerHTML=`
  <option value="todo">To Do</option>
  <option value="progress">Progress</option>
  <option value="completed">Completed</option>
  `
  card.append(selector);

  // choosing option then task should move according to its status

  selector.addEventListener("click",(eventDetails)=>{
    let selectedOption = eventDetails.target.value;
    let selectedContainer = document.querySelector(`#${selectedOption}`)
    if(selectedOption!= "todo")
      {selectedContainer.append(card)};
  })
}





