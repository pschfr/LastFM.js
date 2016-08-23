function lastFM_request() {
	var method = 'user.getrecenttracks';
	var user   = 'paul_r_schaefer';
	var key    = '0f680404e39c821cac34008cc4d803db';
	var lastFMurl = 'https://ws.audioscrobbler.com/2.0/?method=' + method + '&user=' + user + '&api_key=' + key + '&format=json';

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', lastFMurl, true);
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4) {
	        if(xmlhttp.status == 200) {
	            var obj = JSON.parse(xmlhttp.responseText);
				console.log(obj.recenttracks.track[0]);

				var artistName = obj.recenttracks.track[0].artist['\#text'];
				var songName   = obj.recenttracks.track[0].name;
				document.getElementById('lastFM').innerHTML = artistName + ' - ' + songName;
	         }
	    }
	};
	xmlhttp.send(null);
}
lastFM_request();
setInterval(lastFM_request(), 30000);
