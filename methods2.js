let man = {
    lastName: "Jack",
    firstName: "Smith",
    age: 33,
    height: 1.8,
    weight: 85,
    login: smith33,
    password: 34562789,
    sumMoney: 13500,
    getIMT() {
        return (this.weight / (this.height ** 2))
        
    },
    imtResult(imt) {
     if(imt >= 18) {
         return "Недостаточный вес"
     } else if(imt > 18 && imt < 25) {
         return "Вес в норме"
     } else if(imt > 25 && imt < 29) {
         return "Избыточный вес"
     } else if(imt > 29 && imt < 29) {
         return "Ожирение"
     }
  },
  giveMoney(num) {
    if(num > (this.money / 2)){
        return 'Делахь, сайгах дац са оццал ахч'
    }
else {
return `Хьаэца хьай ${num}. Соьгахь диснаг х1ар ду: (${this.money} - ${num}). Сих хьадалахь!`
}
}

}
 man.address = {
    city: "New York",
    street: "Wall Street",
    house: "9"
};
    


let line = "Hello"
if(line === this.password){
    console.log(`Добро пожаловать,${this.lastName} ${this.firstName}.Ваш логин${this.login}.`)
    } else {
        console.log(`Указанный пароль${this.password} не верен.Попробуйте еще раз.`)
    };


 /*Присвоить объекту новое свойство lotteryNumber задать ему любое произвольное значение от 0 до 1000.
 Отдельно от объекта создать переменную lottery, в значении которого будет рандомное (случайное число). Далее напишите код, в котором,
 если значение свойство lotteryNumber и переменной lottery окажутся равны, то свойство объекта man отвечающее за сумму денег на счете
увеличивается на 1 000 000 и в alert() будет выведено сообщение: “поздравляем вы выиграли!”, иначе “Вы проиграли, попробуйте еще раз”. */

man.lotteryNumber = 150;
let lottery = 150;
if(man.lotteryNumber === lottery){
     man.money * 1000000;
    alert('поздравляем вы выиграли!')
}
else {
    alert('Вы проиграли, попробуйте еще раз')
};