ig.module("impact.sound-handler")
  .defines(function() {
    ig.SoundHandler = ig.Class.extend({
        formats: {
            ogg: ".ogg",
            mp3: ".mp3"
        },
        jukebox: null,
        pausePosition: null,
        globalMute: !1,
        forceMuted: !1,
        muted: !1,
        bgmStarted: !1,
        bgmPlaying: !1,
        soundPlaying: !1,
        currentSoundPlaying: null,
        soundBuffer: [],
        voSoundLoaded: [],
        sfxSoundLoaded: [],
        SOUNDID: {},
        voSoundsToLoad: [],
        sfxSoundsToLoad: [{
            name: "staticSound",
            path: "media/audio/play/scary/static"
        }, {
            name: "openingSound",
            path: "media/audio/opening/opening"
        }, {
            name: "kittyopeningSound",
            path: "media/audio/opening/kittyopening"
        }, {
            name: "bellStartSound",
            path: "media/audio/bell-start"
        }, {
            name: "jabSound",
            path: "media/audio/funny/jab"
        }, {
            name: "hookLeftSound",
            path: "media/audio/funny/hook-left"
        }, {
            name: "hookRightSound",
            path: "media/audio/funny/hook-right"
        }, {
            name: "upperCutSound",
            path: "media/audio/funny/upper-cut"
        }, {
            name: "roundOneSound",
            path: "media/audio/round-one"
        }, {
            name: "roundTwoSound",
            path: "media/audio/round-two"
        }, {
            name: "roundThreeSound",
            path: "media/audio/round-three"
        }, {
            name: "fightSound",
            path: "media/audio/funny/fight"
        }, {
            name: "ringSound",
            path: "media/audio/funny/ring"
        }, {
            name: "fallSound",
            path: "media/audio/funny/fall"
        }, {
            name: "cheerSound",
            path: "media/audio/cheer"
        }, {
            name: "buttonSound",
            path: "media/audio/button"
        }, {
            name: "powerUpSound",
            path: "media/audio/funny/upper-cut"
        }, {
            name: "countOneSound",
            path: "media/audio/funny/count-one"
        }, {
            name: "countTwoSound",
            path: "media/audio/funny/count-two"
        }, {
            name: "countThreeSound",
            path: "media/audio/funny/count-three"
        }, {
            name: "countFourSound",
            path: "media/audio/funny/count-four"
        }, {
            name: "countFiveSound",
            path: "media/audio/funny/count-five"
        }],
        debug: !1,
        init: function() {
            this.initSfx();
            this.setupWindowHandler()
        },
        allVoSoundLoaded: function() {
            if (this.voSoundLoaded.length >= this.voSoundsToLoad.length) {
                this.debug && console.log("Vo ready");
                for (index = 0; index < this.voSoundLoaded.length; index++)
                    this.voSoundLoaded[index].on("end", function(b) {
                        b.isPlaying = !1;
                        this.soundBuffer.pop()
                    }
                    .bind(this, this.voSoundLoaded[index])),
                    this.voSoundLoaded[index].on("play", function(b) {
                        b.isPlaying = !0
                    }
                    .bind(this, this.voSoundLoaded[index]));
                return !0
            }
            return !1
        },
        allSfxSoundLoaded: function() {
            return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1
        },
        stopBackgroundMusic: function() {
            ig.ua.mobile ? this.pausePosition = this.jukebox.player.pause() : ig.music.pause();
            this.bgmPlaying = !1
        },
        playBackgroundMusic: function() {
            this.bgmPlaying || (this.bgmStarted = !0,
            ig.ua.mobile ? this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0) : ig.music.play(),
            this._unMuteBackgroundMusic(),
            this.bgmPlaying = !0)
        },
        playSound: function(b) {
            if ((b = this[b]) && (!this.forceMuted || !this.muted) && !b.isPlaying)
                this.soundBuffer.push(b),
                b.play()
        },
        stopAllAndPlaySound: function(b) {
            this.stopAllSounds();
            this.playSound(b)
        },
        stopAllSounds: function() {
            for (index = 0; index < this.soundBuffer.length; index++)
                this.soundBuffer[index].isPlaying = !1,
                this.soundBuffer.splice(0, 1)[0].stop()
        },
        addSound: function(b, c, d) {
            var f = c + this.formats.ogg;
            c += this.formats.mp3;
            this.SOUNDID[b] = b;
            this[b] = d ? new Howl({
                urls: [f, c],
                onload: d
            }) : new Howl({
                urls: [f, c]
            })
        },
        _muteSounds: function() {
            for (i = 0; i < ig.resources.length; i++)
                ig.resources[i].multiChannel && ig.resources[i].stop();
            Howler.mute();
            this.debug && console.log("Sounds muted")
        },
        _unMuteSounds: function() {
            Howler.unmute();
            ig.Sound.enabled = !0;
            this.debug && console.log("Sounds can play")
        },
        _muteBackgroundMusic: function() {
            ig.ua.mobile ? (this.stopBackgroundMusic(),
            this.jukebox.player.setVolume(0)) : ig.music.volume = 0;
            this.debug && console.log("BGM muted");
            this.bgmPlaying = !1
        },
        _unMuteBackgroundMusic: function() {
            this.bgmStarted && (ig.ua.mobile ? (this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0),
            this.jukebox.player.setVolume(1)) : ig.music.volume = 1,
            this.debug && console.log("BGM can play"),
            this.bgmPlaying = !0)
        },
        focusBlurMute: function() {
            ig && ig.game && ig.game.pauseGame();
            this.forceMuted || this.mute()
        },
        focusBlurUnmute: function() {
            this.forceMuted || this.unmute();
            ig && ig.game && ig.game.resumeGame()
        },
        setForceMuted: function(b) {
            this.forceMuted = b
        },
        mute: function() {
            this.muted || (this._muteSounds(),
            this._muteBackgroundMusic(),
            this.muted = !0)
        },
        unmute: function() {
            this.muted && (this._unMuteSounds(),
            this._unMuteBackgroundMusic(),
            this.muted = !1)
        },
        setupWindowHandler: function() {
            "true" === getQueryVariable("webview") ? ($(window).focus(function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }),
            $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })) : (window.onfocus = function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }
            ,
            window.onblur = function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            }
            )
        },
        initSfx: function() {
            for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
                var b = function(b) {
                    this.sfxSoundLoaded.push(this[b])
                }
                .bind(this, this.sfxSoundsToLoad[index].name);
                this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, b)
            }
        },
        initVoSfx: function() {
            for (index = 0; index < this.voSoundsToLoad.length; index++) {
                var b = function(b) {
                    this.voSoundLoaded.push(this[b])
                }
                .bind(this, this.voSoundsToLoad[index].name);
                this.addSound(this.voSoundsToLoad[index].name, this.voSoundsToLoad[index].path, b)
            }
        },
        setupDesktopMusic: function() {
            ig.music.add("media/audio/background.*", "background")
        },
        setupJukebox: function() {
            ig.ua.mobile && (this.jukebox = new ig.Jukebox,
            this.pausePosition = this.jukebox.player.settings.spritemap.music.start)
        },
        forceLoopBGM: function() {
            if (ig.ua.winPhone && !this.forceMuted && this.bgmPlaying && this.jukebox && this.jukebox.player && this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop) {
                if (0 <= this.prevTime)
                    if (this.jukebox.player.getCurrentTime() === this.prevTime) {
                        if (this.silentCounter || (this.silentCounter = 0),
                        this.silentCounter++,
                        this.jukebox.player.getCurrentTime() >= this.jukebox.player.settings.spritemap.music.end || this.silentCounter > 0.0010 * ig.soundHandler.jukebox.player.settings.timeout * ig.system.fps)
                            this.jukebox.player.pause(),
                            this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0),
                            this.silentCounter = null
                    } else
                        this.silentCounter = null;
                this.prevTime = this.jukebox.player.getCurrentTime()
            }
        }
    })});
