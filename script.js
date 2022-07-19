//==========================Total Production(litres)===========================>
let total = 0 // shed1, shed2, shed3, shed4 //
const data = {
    'shed1': [], // shed one
    'shed2': [],  // shed two
    'shed3': [],
    'shed4': [],
}

//=================================table========================>
function getTable() {
    let tr1 = document.getElementsByClassName('sheds')
    let tr2 = document.getElementsByClassName('Litres')
    let tr3 = document.getElementsByClassName('Amount')
    let tr4 = document.getElementsByClassName('No.of Cows')
    for (let x = 0; x < 7; x++) {
        let td1 = document.getElementsByClassName('td')
        let td2 = document.getElementsByClassName('td')
        let td3 = document.getElementsByClassName('td')
        let td4 = document.getElementsByClassName('td')
        td1.setAttribute('id', `shedOne${x}`)
        td2.setAttribute('id', `shedTwo${x}`)
        td3.setAttribute('id', `total${x}`)
        td4.setAttribute('id', `earnings${x}`)
        tr1.appendChild(td1)
        tr2.appendChild(td2)
        tr3.appendChild(td3)
        tr4.appendChild(td4)
    }
}

// function to generate random values between 10 & 15 and fill shedOne & shedTwo arrays
const randGen = () => {
    for (let i = 0; i < 366; i++) {
        let a = Math.floor(Math.random() * (15 - 10) + 10);
        let b = Math.floor(Math.random() * (15 - 10) + 10);
        data.shedOne.push(a)
        data.shedTwo.push(b)
        data.earnings.push((a + b) * 45)
    }
    console.log(data)
}

const fillShedOne = () => {
    for (let x = week; x < 7 + week; x++) {
        let td = document.getElementById(`shedOne${x - week}`)
        td.innerHTML = data.shedOne[x]
    }
}

const fillShedTwo = () => {
    for (let x = week; x < 7 + week; x++) {
        let td = document.getElementById(`shedTwo${x - week}`)
        td.innerHTML = data.shedTwo[x]
    }
}

const fillTotal = () => {
    for (let x = week; x < 7 + week; x++) {
        let total = data.shedOne[x] + data.shedTwo[x]
        let td = document.getElementById(`total${x - week}`)
        td.innerHTML = total
    }
}

const fillEarnings = () => {
    for (let x = week; x < 7 + week; x++) {
        let td = document.getElementById(`earnings${x - week}`)
        td.innerHTML = data.earnings[x]
    }
}

const totalProduction = () => {
    randGen()
    createTable()
    fillShedOne()
    fillShedTwo()
    fillTotal()
    fillEarnings()
    let weekIndicator = document.getElementById('week')
    let next = document.getElementById('next')
    let previous = document.getElementById('previous')
    weekIndicator.innerHTML = `Week ${(week / 7) + 1}`
    next.onclick = () => {
        if (week < (51 * 7)) {
            week += 7
            fillShedOne()
            fillShedTwo()
            fillTotal()
            fillEarnings()
            let weekIndicator = document.getElementById('week')
            weekIndicator.innerHTML = `Week ${(week / 7) + 1}`
        }
    }
    previous.onclick = () => {
        if (week > 0) {
            week -= 7
            fillShedOne()
            fillShedTwo()
            fillTotal()
            fillEarnings()
            let weekIndicator = document.getElementById('week')
            weekIndicator.innerHTML = `Week ${(week / 7) + 1}`
        }
    }
}

totalProduction()