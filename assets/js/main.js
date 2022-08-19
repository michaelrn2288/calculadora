function createCalculator () {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('#btn-Clear'),
        btnBackspace: document.querySelector('#btn-Backspace'),
        btnResult: document.querySelector('#btn-Result'),

        start() {
            this.clickButton()
        },

        clickButton() {
            document.addEventListener('mousedown', event => {
                const element = event.target
                if (element.classList.contains('btn-insert')) {
                    this.btnToDisplay(element.textContent)

                } else if(element === this.btnClear) {
                    this.clearDisplay()

                } else if (element === this.btnBackspace) {
                    this.delLastChar()

                } else if (element === this.btnResult) {
                    this.calculate()

                } else if (element === this.display) {
                    event.preventDefault()
                }
            })
        },

        btnToDisplay(btnValue) {
            this.display.value += btnValue
        },

        clearDisplay(){
            this.display.value = ''
        },

        delLastChar(){
            this.display.value = this.display.value.slice(0, -1)
        },

        calculate(){
            let expression = this.display.value
            try {
                expression = eval(expression)
                this.display.value = expression

            } catch(error){
                alert('conta inválida')
            }
        },
    }
}

const calculator = createCalculator()
calculator.start()