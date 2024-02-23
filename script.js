
function updateOutput(value) {
  document.getElementById("out").textContent = value;
}


function stopLink(event) {
  event.preventDefault();
}


function logEvent(event) {
  console.log("Событие типа: " + event.type);
}


let link = document.getElementById("Link");

link.addEventListener("click", stopLink);
link.addEventListener("mouseover", logEvent);
link.addEventListener("mouseout", logEvent);
link.addEventListener("focus", logEvent);


function handleEvent(eventType, elementId, eventPhase) {
  console.log("Событие " + eventType + " на элементе " + elementId + " на стадии " + eventPhase);
}

function addEventHandlers(elementId, eventType) {
  let element = document.getElementById(elementId);

  element.addEventListener(eventType, function(event) {
      handleEvent(eventType, elementId, "всплытия");
  });


  element.addEventListener(eventType, function(event) {
      handleEvent(eventType, elementId, "перехвата");
  }, true);
}

for (let i = 1; i <= 5; i++) {
  let elementId = "element" + i;
  addEventHandlers(elementId, "click");
  addEventHandlers(elementId, "mouseover"); 
}

function triggerUserEvent() {
  let eventType = prompt("Введите тип события:");
  let elementId = prompt("Введите id элемента:");
  
  let element = document.getElementById(elementId);
  if (element) {

      let event = new Event(eventType);
      element.dispatchEvent(event);
      // Объект события создали, выводим метод
      
  } else {
      alert("Элемент с id '" + elementId + "' не найден.");
  }
}

let triggerButton = document.createElement("button");
triggerButton.textContent = "Сгенерировать пользовательское событие";
triggerButton.addEventListener("click", triggerUserEvent);
document.body.appendChild(triggerButton);