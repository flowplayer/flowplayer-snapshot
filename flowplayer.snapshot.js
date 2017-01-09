(function() {
  var extension = function(flowplayer) {
    var common = flowplayer.common;
    flowplayer(function(api, root) {
      api.snapshot = function() {
        var videoTag = common.find('video.fp-engine', root)[0];
        if (!videoTag) return;
        var canvas = document.createElement('canvas')
          , context = canvas.getContext('2d')
          , w = videoTag.videoWidth
          , h = videoTag.videoHeight;
        canvas.width = w;
        canvas.height = h;
        context.fillRect(0,0, w, h);
        context.drawImage(videoTag, 0, 0, w, h);
        return canvas.toDataURL();
      };
    });
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = extension;
  else extension(window.flowplayer);
})();
