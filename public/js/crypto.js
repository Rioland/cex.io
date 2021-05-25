$(document).ready(function(){
   $.ajax({
       type: "get",
       url: "./crypto.php",
    //    data: "data",
       dataType: "json",
       success: function (response) {
        //    var obj = JSON.parse(response);
           console.log(response.data);
       }
   });
});