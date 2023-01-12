var rating = 0;

$(".rating").on("click", function () {

    $(".rating").css("background-color", "hsl(216, 12%, 54%)");
    $(this).css("background-color", "hsl(25, 97%, 53%)");
    rating = $(this).text();
})

$(".submit").on("click", function () {

    if (rating === 0) {
        alert("please select a rating!")
    } 
    
    else {
   
        $(".result").html(rating);
        $(".main2").removeClass("hidden");
        $(".main1").addClass("hidden");
        $(".main").css("text-align", "center");
        $(".main").css("padding", "20px");
    }
})