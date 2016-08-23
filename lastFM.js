function lastFM_request() {
	var method = 'user.getrecenttracks';
	var user   = 'paul_r_schaefer';
	var key    = '0f680404e39c821cac34008cc4d803db';
	var num    = '5';
	var lastFMurl = 'https://ws.audioscrobbler.com/2.0/?method=' + method + '&user=' + user + '&api_key=' + key + '&format=json';

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', lastFMurl, true);
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4) {
	        if(xmlhttp.status == 200) {
	            var obj = JSON.parse(xmlhttp.responseText);

				for (i = 0; i < num; i++) {
					console.log(obj.recenttracks.track[i]);
					var artistName = obj.recenttracks.track[i].artist['\#text'];
					var songName   = obj.recenttracks.track[i].name;
					var songURL    = obj.recenttracks.track[i].url;

					document.getElementById('lastFM').innerHTML += '<a href="' + songURL + '" target="_blank">' + artistName + ' - ' + songName + '</a><br>';
				}
	         }
	    }
	};
	xmlhttp.send(null);
}
setInterval(lastFM_request(), 30000);
