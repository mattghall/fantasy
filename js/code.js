function browserCheck() {
  if (navigator.userAgent.search("Chrome") >= 0) {
    return;
  }
  var browser = "not chrome"
  if (navigator.userAgent.search("MSIE") >= 0) {
    browser = "MSIE";
  } else if (navigator.userAgent.search("Firefox") >= 0) {
    browser = "Firefox";
  } else if (navigator.userAgent.search("Safari") >= 0) {
    browser = "Safari";
  } else if (navigator.userAgent.search("Opera") >= 0) {
    browser = "Opera";
  }
  alert("We noticed you are using " + browser + " as your browser.\nUnfortunately TCX Editor has only been tested in Google Chrome. Certain features such as 'literally doing anything' may not work. Please consider reopening in Chrome or else you're on your own.");
}


$(function() {
  browserCheck();

  });
