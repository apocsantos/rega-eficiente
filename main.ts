let sat = 0
let luz = 0
basic.forever(function () {
    basic.clearScreen()
    OLED.init(128, 64)
    basic.pause(100)
    sat = pins.analogReadPin(AnalogPin.P0)
    luz = input.lightLevel()
    if (sat <= 50 && luz > 70) {
        images.iconImage(IconNames.Sad).showImage(0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        OLED.writeStringNewLine("Rega em curso")
        basic.pause(5000)
    } else {
        images.iconImage(IconNames.Happy).showImage(0)
        images.iconImage(IconNames.Umbrella).scrollImage(1, 200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        OLED.writeStringNewLine("Rega concluída, solo em conduções de humidade perfeitas")
    }
})
