angular.module('video-player')
.component('videoListEntry', {
  bindings:{
    video: '<'
  },
  controller: function() {
    // this.video = window.exampleVideoData[0]
  },
  templateUrl: "src/templates/videoListEntry.html"

});
