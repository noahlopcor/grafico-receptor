radio.onReceivedNumber(function (receivedNumber) {
    string = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(string, -95, -42, 0, 9),
    9
    )
})
let string = 0
radio.setGroup(19)
basic.forever(function () {
	
})
