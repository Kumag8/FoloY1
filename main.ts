radio.onReceivedString(function (receivedString) {
    if (receivedString == "前8") {
        pins.analogWritePin(AnalogPin.P13, 1023)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (receivedString == "前7") {
        pins.analogWritePin(AnalogPin.P13, 895)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (receivedString == "前6") {
        pins.analogWritePin(AnalogPin.P13, 767)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (receivedString == "前5") {
        pins.analogWritePin(AnalogPin.P13, 639)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (receivedString == "前4") {
        pins.analogWritePin(AnalogPin.P13, 511)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (receivedString == "前3") {
        pins.analogWritePin(AnalogPin.P13, 383)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (receivedString == "前2") {
        pins.analogWritePin(AnalogPin.P13, 255)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (receivedString == "前1") {
        pins.analogWritePin(AnalogPin.P13, 127)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (receivedString == "とまる") {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (receivedString == "後1") {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 127)
    } else if (receivedString == "後2") {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 255)
    } else if (receivedString == "後3") {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 383)
    } else if (receivedString == "後4") {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 511)
    } else if (receivedString == "後5") {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 639)
    } else if (receivedString == "後6") {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 767)
    } else if (receivedString == "後7") {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 895)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 1023)
    }
    if (receivedString == "右4") {
        pins.analogWritePin(AnalogPin.P16, 1023)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (receivedString == "右3") {
        pins.analogWritePin(AnalogPin.P16, 767)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (receivedString == "右2") {
        pins.analogWritePin(AnalogPin.P16, 511)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (receivedString == "右1") {
        pins.analogWritePin(AnalogPin.P16, 255)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (receivedString == "かいてんおわり") {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (receivedString == "左1") {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P15, 255)
    } else if (receivedString == "左2") {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P15, 511)
    } else if (receivedString == "左3") {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P15, 767)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P15, 1023)
    }
})
let 無線グループ = 88
radio.setGroup(無線グループ)
basic.showNumber(無線グループ)
basic.showIcon(IconNames.Happy)
