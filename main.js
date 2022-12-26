$(document).ready(function() {
    $("#conbtn").click(function() {
        let email = $("#email").val();
        let mobile = $("#number").val();
        if(email == " "){
            return false
        }
        $("#email").change(function (e) { 
            e.preventDefault();
            $("#email").removeClass("border-solid border-2 border-red-600");
        });
        if(!isEmail(email)==false){
            $("#email").removeClass("border-solid border-2 border-red-600");
            alert("Your contact details successfully submitted")
          }
          else{
            $("#email").addClass("border-solid border-2 border-red-600");
          }
    });
    
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
          return false;
        }else{
          return true;
        }
      }
});