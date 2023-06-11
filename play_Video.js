
    var file = document.getElementById('file');
    var videoPlayer = document.getElementById('videoPlayer');
    var url="";
    file.addEventListener('change', function(event) {
      var selectedFile = event.target.files[0];
       url = URL.createObjectURL(selectedFile);
    });

    function play(){
        videoPlayer.src=url;

    }