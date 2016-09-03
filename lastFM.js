function lastFM_request() {
	var method    = 'user.getrecenttracks';
	var username  = 'paul_r_schaefer';
	var API_key   = '0f680404e39c821cac34008cc4d803db';
	var number    = '10'; // Increase this to increase number of tracks
	var lastFMurl = 'https://ws.audioscrobbler.com/2.0/?method=' + method + '&user=' + username + '&api_key=' + API_key + '&format=json';
	var xmlhttp   = new XMLHttpRequest();

	xmlhttp.open('GET', lastFMurl, true); // begins request to Last.FM

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4) {			// When Last.FM is ready,
	        if(xmlhttp.status == 200) {			// And we have text,
	            var obj = JSON.parse(xmlhttp.responseText);

				for (i = 0; i < number; i++) {	// Loop through responses
					// references this specific track
					var track = obj.recenttracks.track[i];

					console.log(track);

					// fetches data from track
					var artistName = track.artist['\#text'];
					var albumName  = track.album['\#text'];
					var songName   = track.name;
					var songURL    = track.url;
					var imgURL     = track.image[0]['\#text']; // Image sizes go from 0 - 3

					if (imgURL != '') // if imgURL exists, print image
						document.getElementById('lastFM').innerHTML += '<img src="' + imgURL + '" alt="' + albumName + '" title="' + albumName + '"/> ';

					// prints link to song with artist and song name
					document.getElementById('lastFM').innerHTML += '<a href="' + songURL + '" target="_blank">' + artistName + ' - ' + songName + '</a><br>';
				}
	         }
	    }
	};
	xmlhttp.send(null); // Close connection
}
setInterval(lastFM_request(), 5000); // Repeat every 5 seconds
