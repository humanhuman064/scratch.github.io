$('#scratch').wScratchPad({
    size        : 50,          // The size of the brush/scratch.
    bg          : 'index.png',  // Background (image path or hex color).
    fg          : 'canvas.png',  // Foreground (image path or hex color).
    // bg: '#fff',
    // fg: '#000',
    realtime    : true,       // Calculates percentage in realitime.
    // scratchDown : null,       // Set scratchDown callback.
    // scratchUp   : null,       // Set scratchUp callback.
    // scratchMove : null,       // Set scratcMove callback.
    cursor      : null, // Set cursor.
    scratchDown: function(e, percent){ console.log(percent); },
    scratchMove: function(e, percent){ console.log(percent); },
    scratchUp: function(e, percent){ console.log(percent); },
    scratchMove: function(e, percent)
    {
        if(percent > 80)
        {
          $('#scratch').wScratchPad('clear');
        }
    }
  });
