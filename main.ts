radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
    }
})
input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
})
radio.setGroup(115)
