var disableForwardScrubbbing = function(player) {
  return {
    setSource: function setSource(srcObj, next) {
      next(null, srcObj);
    },
    setCurrentTime: function setCurrentTime(ct) {
      if ( ct < player.currentTime() ) {
        return ct;
      } else {
        return player.currentTime();
      }
    }
  };
};
