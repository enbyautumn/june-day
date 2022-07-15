let output = document.getElementById("output")

function dayOfJune(date) {
    let now = date ? new Date(date) : new Date()
    let juneStart = new Date(now.getFullYear(), 5, 0)
    let diff = now - juneStart
    if (diff <= 0) {
        juneStart = new Date(now.getFullYear() - 1, 5, 0)
        diff = now - juneStart
    }
    let days = Math.floor(diff / (1000 * 60 * 60 * 24))
    return days
}

let ordinal = (number) => {
    let ordinalRules = new Intl.PluralRules("en", {
        type: "ordinal",
    })
    let suffixes = {
        'one': 'st',
        'two': 'nd',
        'few': 'rd',
        'other': 'th',
    }
    return `${number}${suffixes[ordinalRules.select(number)]}`
}

output.innerText = `Today is June ${ordinal(dayOfJune())}`