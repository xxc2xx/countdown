for index in range(10):
    music.play(music.tone_playable(262, music.beat(BeatFraction.EIGHTH)),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_number(0 - index)
    basic.show_string("Hello!")