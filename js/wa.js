// Form WhatsApp

$('.whatsapp-btn').click(function(){
	$('#whatsapp').toggleClass('toggle');
});
// Onclick Whatsapp Sent!
$('#whatsapp .submit').click(WhatsApp);

$("#whatsapp input, #whatsapp textarea").keypress(function() {
	if (event.which == 13) WhatsApp();
});
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
function WhatsApp() {
	var ph = '';
	if ($('#whatsapp .nama').val() == '') { // Cek Nama
		ph = $('#whatsapp .nama').attr('placeholder');
		alert('Silahkan tulis ' + ph);
		$('#whatsapp .nama').focus();
		return false;
	} else if ($('#whatsapp .email').val() == '') { // Cek Email
		ph = $('#whatsapp .email').attr('placeholder');
		alert('Silahkan tulis ' + ph);
		$('#whatsapp .email').focus();
		return false;
	} else if ($('#whatsapp .pesan').val() == '') { // Cek Pesan
		ph = $('#whatsapp .pesan').attr('placeholder');
		alert('Silahkan tulis ' + ph);
		$('#whatsapp .pesan').focus();
		return false;
	} else {
		if (!confirm("Sudah menginstall WhatsApp?")) {
			window.open("https://www.whatsapp.com/download/");
		} else {
			// Check Device (Mobile/Desktop)
			var url_wa = 'https://web.whatsapp.com/send';
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				url_wa = 'whatsapp://send/';
			}
			// Get Value
			var tujuan = $('#whatsapp .tujuan').val(),
					via_url = location.href,
					nama = $('#whatsapp .nama').val(),
					email = $('#whatsapp .email').val(),
					pesan = $('#whatsapp .pesan').val();
			$(this).attr('href', url_wa + '?phone=62 ' + tujuan + '&text=Hallo riq, ini gua *' + nama + '* %0A%0A' + pesan + '%0A ' + '%0A%0Avia ' + via_url) ;
			var w = 960,
					h = 540,
					left = Number((screen.width / 2) - (w / 2)),
					tops = Number((screen.height / 2) - (h / 2)),
					popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
			popupWindow.focus();
			return false;
		}
	}
}