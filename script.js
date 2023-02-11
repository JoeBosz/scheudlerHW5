// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.


    console.log(dayjs().hour())
    function renderItems() {
        let arrOfTimes = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
        var containerEl = $("#boxContainer");

        for(let i=0; i< arrOfTimes.length; i++) {
            var newTimeBlock = $("<div>")
            if(i+9 < dayjs().hour()) {
                newTimeBlock.attr("id", "hour-"+(i+9)).attr("class", "row time-block past");
            } else if(i+9 == dayjs().hour()) {
                newTimeBlock.attr("id", "hour-"+(i+9)).attr("class", "row time-block present");
            }else {
                newTimeBlock.attr("id", "hour-"+(i+9)).attr("class", "row time-block future");
            }

            var newTimeText = $("<div>").attr("class", "col-2 col-md-1 hour text-center py-3").text(arrOfTimes[i])
            var newTextArea = $("<textarea>").attr("class", "col-8 col-md-10 description");
            var newBtn = $("<button>").attr("class", "btn saveBtn col-2 col-md-1").text("Save")

            newTimeBlock.append(newTimeText)
            newTimeBlock.append(newTextArea)
            newTimeBlock.append(newBtn)

            containerEl.append(newTimeBlock)
        }
    }

    renderItems()

  });
  
//   <div id="hour-9" class="row time-block past">
//         <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
//         <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
//         <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//           Save
//         </button>
//       </div>