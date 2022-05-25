radio.onReceivedString(function (receivedString) {
    led.plotBarGraph(
    Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -95, -42, 0, 9),
    9
    )
})
radio.setGroup(19)
