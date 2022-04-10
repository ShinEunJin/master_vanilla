const fetchBtn = document.querySelector('.fetchBtn')
const checkBtn = document.querySelector('.checkBtn')
const resetBtn = document.querySelector('.resetBtn')

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

fetchBtn.addEventListener('click', () => { fetchData() })
checkBtn.addEventListener('click', () => { checkData() })
resetBtn.addEventListener('click', () => { resetData() })