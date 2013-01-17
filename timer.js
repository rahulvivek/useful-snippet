
<head>
<script type="text/javascript">
function createTimer(t,e,g) {
  g = g || 1;
	t = Math.floor(t);
	var f = function(){
		var h = Math.floor(t/3600), m = Math.floor((t-(h*3600))/60), s = t - (h*3600) - (m*60);
		if (s < 10) {
			s = "0"+s;
		}
		e.value = h+":"+m+":"+s;
		t-=g;
		if (t < 0) {
			clearInterval(i);
			alert("time out");
		}
	};
	f();
	var i = setInterval(f,g*1000);
}
</script>
</head>
<body>
<form><input type="text" id="timer"></form>
<script type="text/javascript">createTimer(1800,document.getElementById("timer"))</script>
</body>
