radio.onReceivedString(function (receivedString) {
    if (receivedString == "前にすすむ") {
        pins.analogWritePin(AnalogPin.P13, 1023)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (receivedString == "後ろにすすむ") {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 1023)
    } else if (receivedString == "とまる") {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    if (receivedString == "左かいてん") {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P15, 1023)
    } else if (receivedString == "右かいてん") {
        pins.analogWritePin(AnalogPin.P16, 1023)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (receivedString == "かいてんおわり") {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
let 無線グループ = 301
radio.setGroup(無線グループ)
basic.showNumber(無線グループ)
basic.showIcon(IconNames.Happy)
