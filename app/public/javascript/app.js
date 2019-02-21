// Initialize
var name = "";
var photo = "";
var scores = [];
var survey = 0;

// Hide all questions
for (var i = 1; i <= 11; i++) {
    $("#question" + i).hide();
}

// Name and Photo link has been added
$("#submit").on("click", function (event) {
    event.preventDefault();

    name = $("#name").val();
    photo = $("#photo").val();

    if (name === "" || photo === "") {
        $(".modal").modal("show");
    } else {
        $("#namePhoto").hide();
        $("#question1").fadeIn();
    };
});

// Answer has been chosen
$(".btn-scale").on("click", function (event) {
    scores[survey] = Number($(this).val());
    $("#question" + ++survey).hide();
    $("#question" + (survey + 1)).fadeIn();

    if (survey === 10) {
        var userData = {
            name: name,
            photo: photo,
            scores: scores
        }

        // AJAX post the data to the friends API.
        $.post("/api/friends", userData, function (data) {
            $("#match-name").text(data.name);
            $("#match-img").attr("src", data.photo);
        });
    }
});