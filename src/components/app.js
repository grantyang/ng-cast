angular.module('video-player', [])

  // .factory("Videos", )

  .component('app', {
    controller: function ($sce) {
      this.selectVideo = (newVideo) => {
        this.currentVideo = newVideo;
        this.videoUrl = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId
        this.currentVideo.embedUrl = $sce.trustAsResourceUrl(this.videoUrl)
    };
      this.searchResults = function () { }
      this.currentVideo = window.exampleVideoData[0];                                       //defaulting
      this.videoUrl = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId        //defaulting
      this.currentVideo.embedUrl = $sce.trustAsResourceUrl(this.videoUrl)                    //defaulting
      this.videos = window.exampleVideoData;
    },

    templateUrl: 'src/templates/app.html'

  });
