var UI = "\
<div id=\"divId\"><p>\
      Youtube Link: <input type=\"text\" id=\"myLink\" value=\"\"><br>\
      OR<br>\
      Index Name: <input type=\"text\" id=\"index\" value=\"\"><br>\
      Elastic DSL:       <textarea id=\"dsl\" rows=\"10\" cols=\"30\"> </textarea>><br>\
      Field:             <input type=\"text\" id=\"field\" value=\"\"><br>\
      <button onclick=\"onClick()\">Submit</button>\
  </p>\
  <div id=\"urlDiv\"></div>\
</div>";
function onClick() {
  var url = document.getElementById("myLink").value;
  var index = document.getElementById("index").value;
  var query = document.getElementById("dsl").value;
  var field = document.getElementById("field").value;
  var redirecturl;
  if(url!='') {
    redirecturl = serverurl+"/plugin?name=youtube&url="+url;
  } else {
    redirecturl = serverurl+"/plugin?name=youtube&index="+index+"&query="+query+"&field="+field;
  }
  document.getElementById("urlDiv").innerHTML = "<p id=\"redirectURL\">"+redirecturl+"</p>";
}

document.getElementById("kibanadiv").innerHTML = UI;
