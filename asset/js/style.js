
const videoFile = document.getElementById('video-file');
const videoButton = $('#video-button');
const videoIcon = $('#video-icon');
var videoPlay = false;

function playPause(){

    if (videoPlay == false){

        videoFile.play();

        videoIcon.removeClass('fas fa-play');
        videoIcon.addClass('fas fa-pause');

        videoPlay = true;
    }
    else {

        videoFile.pause(); 

        videoIcon.removeClass('fas fa-pause')
        videoIcon.addClass('fas fa-play')

        videoPlay = false;
    }
}
videoButton.click(playPause);