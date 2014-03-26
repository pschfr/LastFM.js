// Be sure to replace [USERNAME] and [API]
function listens() {
	$.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=[USERNAME]&api_key=[API]&format=json', function(data) {
		var song = $(".song"), artistVal = data.recenttracks.track[0].artist["#text"], trackVal = data.recenttracks.track[0].name, urlVal = data.recenttracks.track[0].url;
		song.html("<a href='" + urlVal + "' target='_blank'>" + artistVal + " \u2014 " + trackVal + "</a>");
	});
}
listens();
setInterval(listens, 2000);
// 2000 is the number of milliseconds you want it to wait before refreshing
