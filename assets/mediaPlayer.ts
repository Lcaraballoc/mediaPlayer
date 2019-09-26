class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    private initPlugins() {
        this.plugins.forEach(plugins => {
            plugins.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        this.media.paused ? this.media.play() : this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toogleMute() {
        (this.media.muted) ? this.unmute() : this.mute();
        /* if (this.media.muted)
            this.media.muted= false
        else
            this.media.muted= true
     */
    }
}








export default MediaPlayer;