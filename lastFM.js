// Be sure to replace [USERNAME] and [API]
$.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=[USERNAME]&api_key=[API]&format=json', function(data) {
	var song = $(".song"), artistVal = data.recenttracks.track[0].artist["#text"], trackVal = data.recenttracks.track[0].name;
	song.append(artistVal + " \u2014 " + trackVal);
});
