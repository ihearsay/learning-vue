Vue.createApp({
    data() {
        return {
            items: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            if (this.enteredValue.length > 0){
                              this.items.push(this.enteredValue)
                this.enteredValue = ''
            }
        }
    }
}).mount('#app')


// const buttonEl = document.querySelector('button')
// const inputEl = document.querySelector('input')
// const listEl = document.querySelector('ul')

// function addItem() {

//     const value = inputEl.value
//     const newItem = document.createElement('li')
//     newItem.textContent = value
//     listEl.appendChild(newItem)
//     inputEl.value = ''

// }

// buttonEl.addEventListener('click', addItem)

