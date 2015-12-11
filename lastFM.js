// Replace user and key with your own. Or use mine, it's up to you.
function listens() {
	var user = 'paul_r_schaefer', key = '0f680404e39c821cac34008cc4d803db';
	$.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + user + '&api_key=' + key + '&format=json', function(data) {
		$(".song").html(data.recenttracks.track[0].artist["#text"] + " \u2014 " + data.recenttracks.track[0].name);
	});
}
$(document).ready(function(){
	// do the rest of your page functionality here
}).bind("loaded", function(){
	listens();
	setInterval(listens, 2000);
	// 2000 is how many milliseconds between refresh
});
