for (let index = 0; index <= 9; index++) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    basic.showNumber(0 - index)
    basic.showString("Hello!")
}
