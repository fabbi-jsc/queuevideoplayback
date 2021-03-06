$( document ).ready(function() {
    // ====================== Create Data Test ==================

    // Test data with absolute path, in this case 
    // we let's need pass: relativePath=false to flash vars.
    
    soundUrls = [
        "https://dungntnew.github.io/assets/videoplayer/bgm01.mp3", 
        "https://dungntnew.github.io/assets/videoplayer/bgm02.mp3",
        "https://dungntnew.github.io/assets/videoplayer/bgm03.mp3", 
        "https://dungntnew.github.io/assets/videoplayer/bgm04.mp3",
        "https://dungntnew.github.io/assets/videoplayer/bgm05.mp3"
    ];
    movieUrls = [
          "https://dungntnew.github.io/assets/videoplayer/scene_0001.mp4",
          "https://dungntnew.github.io/assets/videoplayer/scene_0002.mp4",
          "https://dungntnew.github.io/assets/videoplayer/scene_0003.mp4",
          "https://dungntnew.github.io/assets/videoplayer/scene_0004.mp4"
    ];

    otherHostMovieUrls = [
        "http://techslides.com/demos/sample-videos/small.mp4"
    ]

    // ====================== Embed SWF To HTML =================
    
    var flashvars = {
        __DEBUG__: false,            /* disable debug model */
        allowScriptAccess: 'always', /* 念のため　*/
        debugEnable: true,          /* in production, need remove this line or set value to fasle */
        relativePath: false,        /* set value to false to flash-player know all urls we using as absolute */
        
        /* when we want to auto play, we need some params init flash player */
        autoPlay: true,                            /* when we want to play immediate */
        useSoundChanel: true,                      /* when we want to play immediate 
                                                      Notice(*): to avoid conflig with other sound (BGM)
                                                      please set soundURL to empty other do not setting.
                                                   */
                                                   
        soundUrl: "",                              /* 
                                                        setup initial start-up sound url [ use for autoPlay ] 
                                                        Notice(*): this options will override useSoundChanel setting! 
                                                    */
        movieUrls:  JSON.stringify(movieUrls)   /* setup initial start-up movie urls - must is json [ use for autoPlay ] */ 
    };
    
    
    var params = {};
    var attributes = {};

    swfobject.embedSWF("swf/Main.swf",           /* path to we flash player */
                       "preview",                /* id of HTML tag we want embed flash player */ 
                       "100%", "100%", 
                       "9.0.0", 
                       "swf/expressInstall.swf", /* path to expressInstall swf (swfobject) */
                       flashvars, params, attributes);
                                

    // ==================== TEST BUTTONS ======================
    
        
    $("#play-other-movie-btn").click(function(){ 
        var player = document.getElementById("preview");
        player.playFullMovie(otherHostMovieUrls[0]); 
    });
                 
    $("#play-one-movie-btn-1").click(function(){ 
        var player = document.getElementById("preview");
        player.playMovie(movieUrls[0], ""); 
    });
    
    $("#play-one-movie-btn-2").click(function(){ 
        var player = document.getElementById("preview");
        player.playMovie(movieUrls[1], ""); 
    });
    
    $("#play-multi-movie-btn").click(function(){
        var player = document.getElementById("preview");
        player.playMultiMovies(movieUrls, soundUrls[0]);    
    });
    
    $("#change-bgm-btn-1").click(function(){ 
        var player = document.getElementById("preview");
        player.setBGM(soundUrls[0]);    
    });
    
    $("#change-bgm-btn-2").click(function(){ 
        var player = document.getElementById("preview");
        player.setBGM(soundUrls[1]);    
    });

});