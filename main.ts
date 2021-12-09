function 燈數 (num: number) {
    // 把數字化為位置
    if (num % 5 == 0) {
        x = 4
        y = Math.floor(num / 5) - 1
    } else {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    // 點燈
    led.plot(x, y)
}
input.onButtonPressed(Button.A, function () {
    // 把上次的燈熄掉
    basic.clearScreen()
    // 陣列歸0
    list = []
    // 把5*5的陣列填滿0
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    // 歸0
    n = 0
    // 限制只能亮f個燈
    while (n < f) {
        // 共25個值:0~24
        // 從中隨機取數
        a = randint(0, 24)
        // 陣列的那一格(a)如果有空位(0)
        if (list[a] == 0) {
            // 蓋上去，該項變為1
            // 蓋上去，該項變為1
            list[a] = 1
            // 表示又要點亮一個燈
            n += 1
            // 呼叫點燈(索引值"+1")
            燈數(a + 1)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    // f由B被按下的次數決定
    f += 1
    // 顯示目前燈數
    basic.showNumber(f)
})
let a = 0
let n = 0
let list: number[] = []
let y = 0
let x = 0
let f = 0
// 至少先讓它亮一個燈
f = 1
