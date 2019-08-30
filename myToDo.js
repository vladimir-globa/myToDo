$('.add-task').bind('click', function(event){
    let value = $("input").val();
    $(".list-tasks").prepend(` <li class="list-group-item list-tasks-item">
                <div class="row">
                    <div class="col-md-10">
                        <span contenteditable="true" >${value}</span>
                    </div>
                    <div class="col-md-1">
                        <button type="button" class="btn btn-outline-success mark">
                            <i class="fa fa-flag" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="col-md-1">
                        <button type="button" class="btn btn-outline-danger delete">
                            <i class="fa fa-window-close-o" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </li>`);
    $('#my-form')[0].reset();
    event.preventDefault();
});

$(document).on('click', '.delete', function() {
    $(this).parents('.list-tasks-item').remove();
});

$(document).on('click', '.mark', function() {
    let btn = $(this).parents('.list-tasks-item').hasClass("strike-text");
    if (btn){
        $('.mark').removeClass("strike-text");
        $(this).parents('.list-tasks-item').removeClass("strike-text");
    } else {
        $('.mark').addClass("strike-text");
        $(this).parents('.list-tasks-item').addClass("strike-text");
    }
})

