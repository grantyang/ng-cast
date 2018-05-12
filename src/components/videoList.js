angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    selectVideo: '<'
  },
  controller: function(){
    // this.videos = window.exampleVideoData;
    this.onClick = function (index) {
      let video = this.videos[index];
      this.selectVideo(video)
    }
  },
  templateUrl: 'src/templates/videoList.html' 
});
