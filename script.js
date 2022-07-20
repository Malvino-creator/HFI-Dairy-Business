
let week = 0;
let month = 0;
const data = {
    'shed1': [], // shed one//
    'shed2': [],  // shed two//
    'earnings': [], // total shed production//
    'monthEarnings': [],
    'months': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

}

// create table
function createTable() {
    let tr1 = document.getElementById('shed1')
    let tr2 = document.getElementById('shed2')
    let tr3 = document.getElementById('total')
    let tr4 = document.getElementById('earnings')
    for (let x = 0; x < 9; x++) {
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        td1.setAttribute('id', `shed1${x}`)
        td2.setAttribute('id', `shed2${x}`)
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
        data.shed1.push(a)
        data.shed2.push(b)
        data.earnings.push((a + b) * 45)
    }
    console.log(data)
}

const fillShed1 = () => {
    for (let x = week; x < 9 + week; x++) {
        let td = document.getElementById(`shed1${x - week}`)
        td.innerHTML = data.shed1[x]
    }
}

const fillShed2 = () => {
    for (let x = week; x < 9 + week; x++) {
        let td = document.getElementById(`shed2${x - week}`)
        td.innerHTML = data.shed2[x]
    }
}

const fillTotal = () => {
    for (let x = week; x < 9 + week; x++) {
        let total = data.shed1[x] + data.shed2[x]
        let td = document.getElementById(`total${x - week}`)
        td.innerHTML = total
    }
}

const fillEarnings = () => {
    for (let x = week; x < 9 + week; x++) {
        let td = document.getElementById(`earnings${x - week}`)
        td.innerHTML = data.earnings[x]
    }
}

const totalProduction = () => {
    randGen()
    createTable()
    fillShed1()
    fillShed2()
    fillTotal()
    fillEarnings()
}

totalProduction()

