input.onButtonPressed(Button.A, function () {
    record.startRecording(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    record.playAudio(record.BlockingState.Blocking)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
})
music.play(music.stringPlayable("C D E F - F F - ", 300), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("C D C D - D D - ", 300), music.PlaybackMode.UntilDone)
for (let index = 0; index < 10; index++) {
	
}
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . # . . .
    . # . . .
    `)
basic.showLeds(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # # . # .
    # # # # .
    # # # . .
    # # # . .
    `)
basic.pause(200)
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.pause(200)
basic.showLeds(`
    . . . . .
    # # . # #
    # # . # #
    # . # . #
    # . . . #
    `)
basic.forever(function () {
	
})
