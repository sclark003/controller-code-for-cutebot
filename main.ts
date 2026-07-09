input.onButtonPressed(Button.AB, function () {
    radio.sendValue("S", 1)
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendValue("H", 1)
    basic.showIcon(IconNames.Surprised)
})
let y = 0
let x = 0
radio.setGroup(7)
basic.forever(function () {
    x = Math.idiv(input.acceleration(Dimension.X), 20)
    y = Math.idiv(input.acceleration(Dimension.Y), 20)
    radio.sendValue("x", x)
    basic.pause(100)
    radio.sendValue("y", y)
    basic.pause(100)
    if (y > 20) {
        basic.showArrow(ArrowNames.North)
    } else if (y < -20) {
        basic.showArrow(ArrowNames.South)
    } else if (x > 20) {
        basic.showArrow(ArrowNames.West)
    } else if (x < -20) {
        basic.showArrow(ArrowNames.East)
    }
})
