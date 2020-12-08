function új_labda () {
    if (labda.get(LedSpriteProperty.Y) == 0) {
        basic.pause(500)
        labda.set(LedSpriteProperty.X, randint(0, 4))
    }
}
function ütő_balra () {
    ütő.move(-1)
    music.playTone(262, music.beat(BeatFraction.Quarter))
}
input.onButtonPressed(Button.A, function () {
    ütő_balra()
})
function vége () {
    if (labda.get(LedSpriteProperty.Y) == 4) {
        if (labda.get(LedSpriteProperty.X) != ütő.get(LedSpriteProperty.X)) {
            game.gameOver()
        }
    }
}
input.onGesture(Gesture.TiltRight, function () {
    ütő_jobbra()
})
input.onButtonPressed(Button.B, function () {
    ütő_jobbra()
})
input.onGesture(Gesture.TiltLeft, function () {
    ütő_balra()
})
function viszaüt () {
    if (ütő.isTouching(labda)) {
        game.addScore(1)
    }
}
function ütő_jobbra () {
    ütő.move(1)
    music.playTone(523, music.beat(BeatFraction.Quarter))
}
let ütő: game.LedSprite = null
let labda: game.LedSprite = null
labda = game.createSprite(randint(0, 4), 0)
ütő = game.createSprite(2, 4)
labda.turn(Direction.Right, 45)
basic.forever(function () {
    labda.move(1)
    labda.ifOnEdgeBounce()
    basic.pause(500)
    vége()
    viszaüt()
    új_labda()
    basic.pause(500)
})
