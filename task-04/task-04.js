
const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
}


const valueEl = document.querySelector("#value")
const decrementEl = document.querySelector('button[data-action="decrement"]')
const incrementEl = document.querySelector('button[data-action="increment"]')


incrementEl.addEventListener('click', () => { 
    counterValue.increment();
    valueEl.textContent = counterValue.value;
})

decrementEl.addEventListener('click', () => { 
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
})

// const saveBtn = document.querySelector('button[data-action="save"]');