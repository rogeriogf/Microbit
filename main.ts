basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . # . # .
        # . # . .
        # . . . .
        `)
    basic.pause(300)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . # . #
        # # . # .
        # . . . .
        `)
    basic.pause(300)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . # # . #
        # . . . .
        `)
    basic.pause(100)
})
