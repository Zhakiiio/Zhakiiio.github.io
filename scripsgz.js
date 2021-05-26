<script type='text/javascript'>
//<![CDATA[
// Global variables. "Available for Edit"
var base ="https://gunz-aportes.blogspot.com/p/protector.html";
var links = document.querySelectorAll('a[href*="mega.nz"]');
for (i = 0; i < links.length; i++) {
  var link = links[i].getAttribute('href');
  links[i].setAttribute('href', base + "?url=" + btoa(link));
}

var links2 = document.querySelectorAll('a[href*="mediafire.com"]');
for (i = 0; i < links2.length; i++) {
  var link2 = links2[i].getAttribute('href');
  links2[i].setAttribute('href', base + "?url=" + btoa(link2));
}


str = window.location.href;
if (str.indexOf('protector.html?url=') > -1){
    document.getElementById('secure_link').style.display = "block";
    contar();
}
  var contador = 15;
function contar() {
  document.getElementById('secure-cc').innerHTML = contador;
  if(contador==0){
      var a = document.getElementById('secure-exit');
      a.setAttribute('onclick', "window.location.href ='"+"http://ouo.io/qs/qzxeEG24?s="+ atob(decodeURIComponent(get('url'))) +"'");
      a.innerText = "Clic aquí, Continuar ";
      a.style.background = "#09f";
  }else{
      contador-=1;
      setTimeout("contar()",1000);
  }
}
function get(param) {
  var vars = {};
  window.location.href.replace( location.hash, '' ).replace(
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
    function( m, key, value ) { // callback
      vars[key] = value !== undefined ? value : '';
    }
  );
  if ( param ) {
    return vars[param] ? vars[param] : null;
  }
  return vars;
}

document.onkeydown = function(e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
         e.keyCode === 86 ||
         e.keyCode === 85 ||
         e.keyCode === 117)) {
        alert('¡Gracias por visitarnos!');
        return false;
    } else {
        return true;
    }
};

$(document).keydown(function (event) {
			
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } 
	else if ((navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey) && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
		
});


//]]>
</script>
