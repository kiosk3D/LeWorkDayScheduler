
window.onload = function() {

  var saveButtons = document.getElementsByClassName("saveBtn");
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", function() {

      var timeBlockId = this.parentNode.getAttribute("id");
      

      var userInput = document.querySelector("#" + timeBlockId + " .description").value;
 
      localStorage.setItem(timeBlockId, userInput);
    });
  }
  

  var timeBlocks = document.querySelectorAll(".time-block");
  var currentHour = dayjs().format("H");
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];
    var timeBlockId = timeBlock.getAttribute("id");
    
    if (timeBlockId < currentHour) {
      timeBlock.classList.add("past");
    } else if (timeBlockId === currentHour) {
      timeBlock.classList.add("present");
    } else {
      timeBlock.classList.add("future");
    }
  }
  

  var savedInputs = [];
  for (var i = 9; i <= 17; i++) {
    var timeBlockId = "hour-" + i;
    var savedInput = localStorage.getItem(timeBlockId);
    
    if (savedInput) {
      savedInputs.push({ id: timeBlockId, value: savedInput });
    }
  }
  
  if (savedInputs.length > 0) {
    for (var i = 0; i < savedInputs.length; i++) {
      var savedInput = savedInputs[i];
      var timeBlockId = savedInput.id;
      var userInput = savedInput.value;
      

      document.querySelector("#" + timeBlockId + " .description").value = userInput;
    }
  }
  

  var currentDate = dayjs().format("MMMM D, YYYY");
  document.getElementById("currentDay").textContent = currentDate;
};

  