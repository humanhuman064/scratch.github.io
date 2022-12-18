$('#scratch').wScratchPad({
    size        : 50,          // The size of the brush/scratch.
    bg          : '#cacaca',  // Background (image path or hex color).
    fg          : '#6699ff',  // Foreground (image path or hex color).
    realtime    : true,       // Calculates percentage in realitime.
    scratchDown : null,       // Set scratchDown callback.
    scratchUp   : null,       // Set scratchUp callback.
    scratchMove : null,       // Set scratcMove callback.
    cursor      : null, // Set cursor.
    scratchDown: function(e, percent){ console.log(percent); },
    scratchMove: function(e, percent){ console.log(percent); },
    scratchUp: function(e, percent){ console.log(percent); }
  });
