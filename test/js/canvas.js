const canvas = document.querySelector('canvas'),
    cx = canvas.getContext('2d')

const INCREMENT = 12345,
    MULTIPLIER = 1103515245,
    MODULUS = Math.pow(2, 31)

// Todo esto son inputs del nodo generador
const stepX = 16,
    stepY = 16,
    sizeX = 1,
    sizeY = 1,
    marginTop = 32,
    marginBottom = 32,
    marginLeft = 32,
    marginRight = 32

let frameID

function lcg(x, c = INCREMENT, a = MULTIPLIER, m = MODULUS) {
    return (a * x + c) % m
}

function createRandom(initialSeed = 0) {
    let seed = initialSeed
    return {
        get currentSeed() {
            return seed
        },
        reset(newSeed) {
            seed = newSeed
        },
        get() {
            seed = lcg(seed)
            return seed / MODULUS
        }
    }
}

const random = createRandom()

function frame(frameTime) {
    // First element
    cx.clearRect(0, 0, cx.canvas.width, cx.canvas.height)
    for (let y = marginTop; y < cx.canvas.height - marginBottom; y += stepY) {
        random.reset(y)
        for (let x = marginLeft; x < cx.canvas.width - marginRight; x += stepX) {
            const randomValue = random.get()
            const distX = randomValue * 16
            const distY = randomValue * 16
            const phase = randomValue * Math.PI * 2
            cx.fillStyle = '#000'
            cx.fillRect(
                x,
                y,
                sizeX + Math.sin(phase + frameTime / 1000) * distX,
                sizeY + Math.cos(phase + frameTime / 1000) * distY
            )
        }
    }
    frameID = window.requestAnimationFrame(frame)
}

function resize() {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
}

function start() {
    window.addEventListener('resize', resize)
    window.dispatchEvent(new Event('resize'))

    frameID = window.requestAnimationFrame(frame)
}

start()