function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }
    
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}

function onFormSubmit(e){
    e.preventsDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if(!$(email).val()){
        alert("Email is required")
    }

    else if(!$(subject).val()){
        alert("Subject is required")
    }

    else if(!$(message)){
        alert("message is requeired")
    }

    else{
        $(email).val("")
        $(subject).val("")
        $(message).val("")
        alert("Form submitted")
    }
}