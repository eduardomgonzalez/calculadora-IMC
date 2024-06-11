import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    value = "";
    he="";
    @track age = "";
    @track het = "";
    @track gen = "";
    @track height = "";
    @track weight = "";
    @track bmi = 0;
    @track result = "";
    @track show = true;
    displayOutput= false;
    @track showModal = false;

    get options() {
        return [
            {label: "Hombre", value: "hombre"},
            {label: "Mujer", value: "mujer"}
        ];
    }

    handlerRadioChange(event) {
        this.gen = event.target.value;
    }

    handler(event) {
        let {name, value} = event.target;

        if(name === "height") {
            this.het = value;
            this.height = value;
        } else if(name === "weight") {
            this.weight = value;
        } else if (name === "age") {
            this.age = value;
        }
    }

    calculatorHandler(event) {
        let nameElement = event.target.name;

        if(nameElement === "calculatebmi") {
            this.displayOutput = true;
            let heightInMeters = parseFloat(this.height) / 100;
            this.bmi = parseFloat(this.weight) / (heightInMeters * heightInMeters);
            this.bmi = this.bmi.toFixed(2);
            console.log("this.bmi 1: " + this.bmi);
        } else if(nameElement === "reset") {
            this.displayOutput = false;
            this.height = "";
            this.weight = "";
            this.gen = "";
            this.age = "";
            this.template.querySelector("form").reset();
        }
        
        this.displayBmi(this.bmi);
    }

    displayBmi() {
        if(this.bmi < 18.5) {
            this.result = "Bajo peso";
        } else if(this.bmi >= 18.5 && this.bmi <= 24.9) {
            this.result = "Peso normal";
        } else if(this.bmi >= 25 && this.bmi <= 29.9) {
            this.result = "Sobrepeso";
        } else {
            this.result = "Obeso";
        }
    }

    openModal() {
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
    }
}