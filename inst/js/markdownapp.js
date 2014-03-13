$(function(){
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/r");
  editor.setFontSize("14px");

  //This app requires OpenCPU 1.0.1 or higher!

  function domarkdown(e){
    var req = ocpu.call("rmdtext", {
      text : editor.getSession().getValue()
    }, function(session){
      $("iframe").attr('src', session.getFileURL("output.html"));
    }).fail(function(text){
      alert("Error: " + req.responseText);
    });
  }

  //auto run after 2 seconds of no activity
  var update = _.debounce(domarkdown, 2000);

  //register event
  editor.on("change", update);

  //init on start
  domarkdown();
});
