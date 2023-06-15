
    var file = document.getElementById('file');
    var videoPlayer = document.getElementById('videoPlayer');
    var url="";

    function play(){
        getUrl();
        videoPlayer.src=url;

    }
    function getUrl(){
        {
            url=URL.createObjectURL(file.files[0]);
    }}

    function pause(){
        if (!videoPlayer.paused) {
            videoPlayer.pause();
        }
    }
    
    function unpause(){
        if (videoPlayer.paused) {
            videoPlayer.play()
        }
    }