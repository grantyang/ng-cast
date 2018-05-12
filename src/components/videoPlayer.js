angular.module('video-player')

.component('videoPlayer', {
  binding: {
    currentVideo: "<"
  },
  controller: function($sce){
    this.currentVideo = window.exampleVideoData[0];
    console.log(this.currentVideo)
    this.selectVideo = function(newVideo) {
      this.currentVideo = newVideo;
   }
    this.videoUrl = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId
    this.embedUrl = $sce.trustAsResourceUrl(this.videoUrl)
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
