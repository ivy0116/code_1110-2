basic.forever(function () {
    for (let I = 0; I <= 2; I++) {
        led.plot(2 + I, 2)
        led.plot(2 - I, 2)
        led.plot(2, 2 + I)
        led.plot(2, 2 - I)
        basic.pause(200)
    }
    for (let j = 0; j <= 2; j++) {
        led.unplot(2 + (2 - j), 2)
        led.unplot(2 - (2 - j), 2)
        led.unplot(2, 2 + (2 - j))
        led.unplot(2, 2 - (2 - j))
        basic.pause(200)
    }
})
