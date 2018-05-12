angular.module('video-player',[])

// .factory("Videos", )

.component('app', {
    controller: function () {
      this.selectVideo = function (newVideo) {
       this.currentVideo = newVideo;
      };
      this.searchResults = function () {}
      this.currentVideo = window.exampleVideoData[0];
      this.videos = window.exampleVideoData;
    },

    templateUrl: 'src/templates/app.html' 
 
  });
