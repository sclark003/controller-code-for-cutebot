input.onButtonPressed(Button.A, function () {
    radio.sendString("F")
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("S")
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("H")
    basic.showIcon(IconNames.Surprised)
})
radio.setGroup(7)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -400) {
        radio.sendString("L")
        basic.showArrow(ArrowNames.West)
        basic.pause(200)
    } else if (input.acceleration(Dimension.X) < 400) {
        radio.sendString("R")
        basic.showArrow(ArrowNames.East)
        basic.pause(200)
    }
})
