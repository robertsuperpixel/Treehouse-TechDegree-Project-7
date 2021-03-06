//Media Elements Player Skin
$('audio, video').mediaelementplayer({
	success: function(player, node) {
		$('#' + node.id + '-mode').html('mode: ' + player.pluginType);
	},
	startLanguage: 'en',
	translationSelector: true,
	stretching: 'auto'
});





/* ----- HIGHLIGHT TEXT ----- */
/* As the media playback time changes, sentences in the transcript should highlight.*/

/* Video Variables */
var mainVideo = document.getElementById('main-video');
var cues = document.querySelectorAll("span.cue");
var lastHighlighted = -1;

//console.log(cues.length);

function highlight(highlightTime) {

	//Highlight span corresponding to current time
	function toggleHighlight(index) {
		if(lastHighlighted != -1) {
			cues[lastHighlighted].classList.remove("highlighted");
			//console.log("removing highlight " + index);
		}

		//Add highlighted class
		cues[index].classList.add('highlighted');
		//console.log("adding highlight " + index);
		lastHighlighted = index;
	}

	if (highlightTime > 0 && highlightTime < 4.13) {
		toggleHighlight(0);
	} else if (highlightTime > 4.13 && highlightTime < 7.535) {
		toggleHighlight(1);
	} else if (highlightTime > 7.535 && highlightTime < 11.27) {
		toggleHighlight(2);
	} else if (highlightTime > 11.27 && highlightTime < 13.96) {
		toggleHighlight(3);
	} else if (highlightTime > 13.96 && highlightTime < 17.94) {
		toggleHighlight(4);
	} else if (highlightTime > 17.94 && highlightTime < 22.37) {
		toggleHighlight(5);
	} else if (highlightTime > 22.37 && highlightTime < 26.88) {
		toggleHighlight(6);
	} else if (highlightTime > 26.88 && highlightTime < 32.1) {
		toggleHighlight(7);
	} else if (highlightTime > 32.1 && highlightTime < 34.73) {
		toggleHighlight(8);
	} else if (highlightTime > 34.73 && highlightTime < 39.43) {
		toggleHighlight(9);
	} else if (highlightTime > 39.43 && highlightTime < 42.35) {
		toggleHighlight(10);
	} else if (highlightTime > 42.35 && highlightTime < 46.3) {
		toggleHighlight(11);
	} else if (highlightTime > 46.3 && highlightTime < 49.27) {
		toggleHighlight(12);
	} else if (highlightTime > 49.27 && highlightTime < 53.76) {
		toggleHighlight(13);
	} else if (highlightTime > 53.76 && highlightTime < 57.78 ) {
		toggleHighlight(14);
	} else if (highlightTime > 57.78 ) {
		toggleHighlight(15);
	}
}

$(document).ready(function() {
	var video = document.getElementById('main-video');
	$(video).bind('timeupdate', function() {
		var time = video.currentTime;
		console.log(time);
		highlight(time);
	});
});