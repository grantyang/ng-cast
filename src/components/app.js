angular.module('video-player')
  .component('app', {
    controller: function ($sce, youTube) {
      this.selectVideo = (newVideo) => {
        this.currentVideo = newVideo;
        this.videoUrl = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId
        this.currentVideo.embedUrl = $sce.trustAsResourceUrl(this.videoUrl)
      };
      this.searchResults = (input) => {
        youTube.SearchYoutube(input).then(this.onSuccess, this.onError)
      }
      this.onSuccess = (response) => {
        console.log('success')
        this.videos = response.data.items
        this.selectVideo(this.videos[0])
      };
      this.onError = (reason) => {
        console.log('failure')
      };
      this.currentVideo = window.exampleVideoData[0];                                       //defaulting
      this.videoUrl = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId        //defaulting
      this.currentVideo.embedUrl = $sce.trustAsResourceUrl(this.videoUrl)                    //defaulting
      this.videos = window.exampleVideoData;
      this.searchResults('cats');
    },
    templateUrl: 'src/templates/app.html'
  })
