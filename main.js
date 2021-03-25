const btn = document.getElementById('generator')
btn.addEventListener('click', generator)


async function generator() {
    let response = await fetch('https://randomuser.me/api/')
    let data = await response.json()

    // destructuring
    let {
        cell,
        email,
        name: {
            first
        },
        name: {
            last
        },
        picture: {
            large
        },
        location: {
            state
        }
    } = data.results[0]

    // grab the place
    document.getElementById('first').textContent = first
    document.getElementById('second').textContent = last
    document.getElementById('third').textContent = cell
    document.getElementById('four').textContent = email
    document.getElementById('five').textContent = state
    document.getElementById('img').src = large
}