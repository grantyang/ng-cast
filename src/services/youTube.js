angular.module('video-player')
  .service('youTube', ['$http', function ($http) {
    this.SearchYoutube = function (queryInput) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: queryInput,
          maxResults: '5',
          key: window.YOUTUBE_API_KEY,
          part: 'snippet',
          embeddable: true
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
    }
  }])