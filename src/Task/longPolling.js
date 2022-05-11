const fetchBtn = document.querySelector('.fetchBtn')
const checkBtn = document.querySelector('.checkBtn')
const resetBtn = document.querySelector('.resetBtn')
const startBtn = document.querySelector('.startLongPolling')

const fetchData = async () => {
    try {
        console.log("Fetching Data")
        fetch("http://localhost:5000/long", { method: "POST" })
    } catch (error) {
        console.warn(error)
    }
}

const checkData = async () => {
    try {
        let result = await fetch("http://localhost:5000/long")
        let { state } = await result.json()
        console.log("Check Data", { state })
        if (state === 1) return state
        await new Promise(resolve => setTimeout(resolve, 1000))
        await checkData()
    } catch (error) {
        console.warn(error)
    }
}

const resetData = async () => {
    try {
        console.log("Reset Data")
        fetch("http://localhost:5000/reset", { method: "POST" })
    } catch (error) {
        console.warn(error)
    }
}

const controller = new AbortController()
const abortBtn = document.querySelector('.abortFetch')

const longPollingStart = async () => {
    while (true) {
        let occurErr = false
        console.log('start requesting')
        try {
            let response = await fetch('http://localhost:5000/longPolling', { signal: controller.signal })
            let data = await response.json()
            console.log('data', data)
        } catch (error) {
            console.log('error', error)
            occurErr = true
        }
        if (occurErr) {
            break
        }
    }
}

abortBtn.addEventListener('click', () => {
    controller.abort()
    console.log('abort')
})

fetchBtn.addEventListener('click', () => { fetchData() })
checkBtn.addEventListener('click', () => { checkData() })
resetBtn.addEventListener('click', () => { resetData() })
startBtn.addEventListener('click', () => { longPollingStart() })

// const setDate = (item) => console.log('언제 만날까요?' + " " + item + " " + this.d