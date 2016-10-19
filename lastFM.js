function lastFM_request() {
	var method    = 'user.getrecenttracks';
	var username  = 'paul_r_schaefer';
	var API_key   = '0f680404e39c821cac34008cc4d803db';
	var number    = '10'; // Increase this to increase number of tracks
	var lastFMurl = 'https://ws.audioscrobbler.com/2.0/?method=' + method + '&user=' + username + '&api_key=' + API_key + '&limit=' + number + '&format=json';
	var element   = document.getElementById('lastFM');
	var xmlhttp   = new XMLHttpRequest();

	xmlhttp.open('GET', lastFMurl, true); // begins request to Last.FM

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4) {			// When Last.FM is ready,
	        if(xmlhttp.status == 200) {			// And we have text,
	            var obj = JSON.parse(xmlhttp.responseText);
				console.log(obj);

				var total = obj.recenttracks['\@attr'].total;
				element.innerHTML += '<p><a href="http://www.last.fm/user/' + username + '" target="_blank">' + username + '</a> has scrobbled <strong>' + total + '</strong> tracks total.</p>';

				for (i = 0; i < number; i++) {	// Loop through responses
					var track   = obj.recenttracks.track[i]; // references this specific track
					console.log(track);

					// fetches data from track
					var artistName = track.artist['\#text'];
					var albumName  = track.album['\#text'];
					var songName   = track.name;
					var songURL    = track.url;
					var imgURL     = track.image[1]['\#text']; // Image sizes go from 0 - 3

					if (imgURL !== '') // if imgURL exists, print image
						element.innerHTML += '<img src="' + imgURL + '" alt="' + albumName + '" title="' + albumName + '"/> ';
					else              	// or print blank album cover
						element.innerHTML += '<img src="images/no-cover.png" alt="' + albumName + '" title="' + albumName + '"/> ';

					// prints link to song with artist and song name
					element.innerHTML += '<a href="' + songURL + '" target="_blank">' + artistName + ' - ' + songName + '</a> ';

					if (track['\@attr'] && track['\@attr'].nowplaying !== '') // if now playing, print now playing gif
						element.innerHTML += '<img src="scrobbling.gif" alt="Now Playing" title="Now Playing" />';

					element.innerHTML += '<br>';
				}
	         }
	    }
	};
	xmlhttp.send(null); // Close connection
}
setInterval(lastFM_request(), 5000); // Repeat every 5 seconds
