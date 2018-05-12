angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    currentVideo: "<"
  },
  controller: function(){
    // console.log(this)
    console.log('current video is:', this.currentVideo)
    // this.currentVideo = window.exampleVideoData[0]; 

  },
  templateUrl: 'src/templates/videoPlayer.html'
});
