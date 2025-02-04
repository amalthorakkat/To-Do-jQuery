const todoContainer = $("#todo-container");
const todoBtn = $("#todo-btn");
const todoInput = $("#todo-text");

// add todo button function
todoBtn.click(() => {
  if (todoInput.val() === "") {
    alert("Oops! You forgot to enter a todo. Please add one.");
  } else {
    const listContainer = $("<div>");
    listContainer.css({ display: "flex", alignItems: "center", gap: "15px" });

    const userValue = todoInput.val();

    // creating list
    const li = $("<li>");
    li.text(userValue);

    // creating delete button
    const dlt = $("<button>");
    dlt.text("Delete");

    // creating edit button
    const edit = $("<button>");
    edit.text("Edit");

    // creating done button
    const done = $("<button>");
    done.text("Done");

    //creating tick element
    const tick = $("<span>");
    tick.text(" ✅");
    tick.css("visibility", "hidden");

    // done function (tick)
    done.click(()=>{
        if (tick.css("visibility")==="hidden"){
            tick.css("visibility","visible")
            done.text("Done")
        }else{
            tick.css("visibility","hidden")
            done.text("Undo")
        }
    })

    // done function (strike)

    // done.click(() => {
    //   if (li.css("text-decoration").includes("line-through")) {
    //     li.css("text-decoration", "none");
    //     done.text("Done");
    //   } else {
    //     li.css("text-decoration", "line-through");
    //     done.text("Undo");
    //   }
    // });

    // edit button function
    edit.click(() => {
      dlt.remove();
      edit.remove();
      done.remove();

      const input = $("<input>");
      input.val(li.text());

      const save = $("<button>");
      save.text("Save");

      li.text("");
      li.append(input);

      listContainer.append(save);

      // save button function
      save.click(() => {
        li.text(input.val());
        save.remove();
        listContainer.append(dlt, edit, done);

        attachEventListeners(listContainer, li, dlt, edit, done, tick);
      });
    });

    listContainer.append(li, dlt, edit, done, tick);

    dlt.click(() => {
      listContainer.remove();
    });

    //function

    function attachEventListeners(listContainer, li, dlt, edit, done, tick) {
      // edit
      edit.click(() => {
        dlt.remove();
        edit.remove();
        done.remove();

        const input = $("<input>");
        input.val(li.text());

        const save = $("<button>");
        save.text("Save");

        li.text("");
        li.append(input);

        listContainer.append(save);

        // save
        save.click(() => {
          li.text(input.val());
          save.remove();
          listContainer.append(dlt, edit, done);

          attachEventListeners(listContainer, li, dlt, edit, done);
        });
      });
      //  delete
      dlt.click(() => {
        listContainer.remove();
      });

     // done function (tick) 

    done.click(()=>{
      if (tick.css("visibility")==="hidden"){
          tick.css("visibility","visible")
          done.text("Done")
      }else{
          tick.css("visibility","hidden")
          done.text("Undo")
      }
  })

      // done function (strike)
      // done.click(() => {
      //   if (li.css("text-decoration").includes("line-through")) {
      //     li.css("text-decoration", "none");
      //     done.text("Done");
      //   } else {
      //     li.css("text-decoration", "line-through");
      //     done.text("Undo");
      //   }
      // });
    }

    todoContainer.append(listContainer);
    todoInput.val("");
  }
});
