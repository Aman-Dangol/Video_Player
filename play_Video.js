
    var file = document.getElementById('file');
    var videoPlayer = document.getElementById('videoPlayer');
    var url="";
    file.addEventListener('change',  function(event){
        getUrl(event);
    });

    function play(){
        videoPlayer.src=url;

    }
    function getUrl(event){
        {
      var selectedFile = event.target.files[0];
       url = URL.createObjectURL(selectedFile);
    }
    }

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