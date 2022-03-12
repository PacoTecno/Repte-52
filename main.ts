input.onButtonPressed(Button.A, function () {
    Personas = Personas + 1
    basic.showNumber(Personas)
})
input.onGesture(Gesture.Shake, function () {
    Personas = 0
    basic.showNumber(Personas)
})
input.onButtonPressed(Button.B, function () {
    if (Personas > 0) {
        Personas = Personas - 1
        basic.showNumber(Personas)
    }
})
let Personas = 0
Personas = 0
basic.forever(function () {
    if (Personas > 5) {
        basic.showString("AF")
    } else {
        basic.showNumber(Personas)
    }
})
