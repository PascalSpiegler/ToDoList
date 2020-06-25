
var emptyList = true;

//Checks off to-dos when list element is clicked
$("ul").on("click", "li", function () {
    $(this).toggleClass("strike")
})

//Deletes to-dos when X is clicked
$("ul").on("click", ".delete", function () {
    //Removes the parent li element
    $(this).parent().fadeOut(400, function () { $(this).remove() })
    //JQuery method that stops event from bubbling to the li
    event.stopPropagation();
})

//Adds new to-dos when enter is pressed within text input
$("input").on("keypress", function (e) {
    //Checks if the enter key was pressed
    if (e.which === 13 && $(this).val() !== '') {
        var toDoText = ($(this).val());
        ($(this).val(''));
        ($(this).attr("placeholder", "Ex: Buy groceries"));
        //Creates new li and adds to ul
        $('ul').append("<li> <span class = 'delete'><i class='fa fa-trash'></i></span>" + toDoText + "</li>")
        if (emptyList === true) {
            $('div').append("<button id = 'clear'>CLEAR</button)")
        }
        emptyList = false;

    }
})

//Toggles maximization and minimization + changes to appropriate icons
$('i').on("click", function () {
    $('input').fadeToggle(400, function(){
        $('#icon').toggleClass("fa-plus")
    })
});

//Clears the to-do list
$('div').on('click', "button", function(){
    $("ul").empty();
    emptyList = true;
    $('button').css('display', 'none')
})
