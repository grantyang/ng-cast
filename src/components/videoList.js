angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },
  controller: function(){
    // this.videos = window.exampleVideoData;
    this.onClick = function () {
    }
  },
  templateUrl: 'src/templates/videoList.html' 
});
