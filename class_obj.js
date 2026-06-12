class complex{
    constructor(real,imaginary){
       this.real=real;
       this.imaginary=imaginary;
    }

    toPrint(){
    console.log(`The complex number is ${this.real}+${this.imaginary}i`);
    console.log(`The real part is ${this.real} and the imaginary part is ${this.imaginary}`)
}
}

let num1 = new complex(2 ,8);
let num2 = new complex(5 ,2);

num1.toPrint();
num2.toPrint();