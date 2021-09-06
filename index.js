<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>Self expanding textarea</title>
<style>
.autoexpand{
  resize:none;
	overflow-y: hidden;
	overflow-x: hidden;
}
</style>
</head>

<body>
<script>
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

</script>
<textarea class="autoexpand" onkeypress="keyPressHandler(this)" oninput="autoExpand(this)" rows="1" maxlength="255" name="field0" style="width_:50px;"></textarea>
</body>

</html>
