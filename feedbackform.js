function submitfeedbackform() {
  alertify.set('notifier','position', 'top-center');
    $( "#feedbackbuton" ).click(function() {

      if($("#feedbackForm").valid()) {
      // alert("submit after");
        username = $("#fullnamefeedback").val();
        email = $("#emailfeedback").val();
        textarea = $("#queryboxfeedback").val();

        $.ajax({
            type: "POST",
            url: "https://zgfnd4m8ph.execute-api.ap-south-1.amazonaws.com/qa",
            // The key needs to match your method's input parameter (case-sensitive).
            data: JSON.stringify({ Name:username, Email:email, Querybox:textarea}),
            contentType: "application/json",
            dataType: "json",
            success: function(data){
                $("#feedbackForm").find("input, textarea").val("");
               alertify.success("Thanks for sharing your opinion.");
          },
            error: function(errMsg) {
              // alertify.error("Please fill all required fields.");
            }
        });
      } else {
         alertify.error("Please fill all required fields.");
        return;
      }

    });
}
