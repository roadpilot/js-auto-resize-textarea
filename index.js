function autoExpand(elem) {
  elem.style.height = 'auto';
  elem.style.height = (elem.scrollHeight-4) + 'px';
}
function keyPressHandler(elem,e) {
      console.log(window.event.shiftKey)
      var kC  = (window.event.keyCode) ?    // MSIE or Firefox?
                 event.keyCode : e.keyCode;
      if(kC==13 && !e.shiftKey){elem.form.submit()}
}


