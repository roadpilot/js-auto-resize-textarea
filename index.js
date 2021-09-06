<style>
.autoexpand{
  resize:none;
	overflow-y: hidden;
	overflow-x: hidden;
}
</style>

function autoExpand(elem) {
  elem.style.height = 'auto';
  elem.style.height = (elem.scrollHeight-4) + 'px';
}
function keyPressHandler(elem,e) {
      console.log(window.event.shiftKey)
      var kC  = (window.event) ?    // MSIE or Firefox?
                 event.keyCode : e.keyCode;
      if(kC==13 && !e.shiftKey){elem.form.submit()}
}

<textarea class="autoexpand" onkeypress="keyPressHandler(this)" oninput="autoExpand(this)" rows="1" maxlength="255" name="field0" style="width_:50px;"></textarea>
