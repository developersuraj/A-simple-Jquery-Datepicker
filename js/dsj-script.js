<!--
/*
/
/ Programming Logic - #1  [Jquery Datepicker]
/ Developer : Suraj Jain
/ Blog : https://developersurajjain.blogspot.com/
/ Website : http://www.surajjain.com/
/ Email : mail.surajjain@gmail.com
/
*/
-->
$(function() {
	$('input[id*=datepicker-]').mouseenter(function(e) {    
		$(this).datepicker();
	});
});
