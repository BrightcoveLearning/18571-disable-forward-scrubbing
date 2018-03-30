// +++ Define the middleware function+++
var disableForwardScrubbbing = function(player) {
  return {
    // +++ Set the source to use any tech +++
    setSource: function setSource(srcObj, next) {
      next(null, srcObj);
    },
    // +++ Alter the setCurrentTime method +++
    setCurrentTime: function setCurrentTime(ct) {
      // Check if the time scrubbed to is less than the current time
      if ( ct < player.currentTime() ) {
        // If time scrubbed to less than current time go back to the spot
        return ct;
      } else {
        // If time scrubbed to is past current time, leave playhead at current time
        return player.currentTime();
      }
    }
  };
};
