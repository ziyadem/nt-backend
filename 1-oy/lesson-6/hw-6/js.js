//1
// class Home{
//     constructor(name,surname,password){
//         this.name=name
//         this.surname=surname
//         this.password=password
//     }
// }
// let user1=new Home('Ziyoda','Maxkamova','ziyadem')
// console.log(user1);
// let user2=new Home('Ziyoda2','Maxkamova2','ziyadem2')
// console.log(user2);
// let user3=new Home('Ziyoda3','Maxkamova3','ziyadem3')
// console.log(user3);
// let user4=new Home('Ziyoda4','Maxkamova4','ziyadem4')
// console.log(user4);
// let user5=new Home('Ziyoda5','Maxkamova5','ziyadem5')
// console.log(user5);

//2
// class Cars{
//     constructor(name,color,sum){
//        this.name=name;
//        this.color=color;
//        this.sum = sum;
//     }
//     nameCars(){
//         console.log(`Hello my name is ${this.name}`);
//     }
//     colorCars(){
//         console.log(`my color ${this.color}`);
//     }
//     sumCars(){
//         console.log(`my sum ${this.sum}`);
//     }
// }
// let myCars1=new Cars('Mercedes Banse1','black1','250 001 y.e')
// myCars1.nameCars()
// myCars1.colorCars()
// myCars1.sumCars();
// console.log(myCars1);
// let myCars2=new Cars('Mercedes Banse2','black2','250 002 y.e')
// myCars2.nameCars()
// myCars2.colorCars()
// myCars2.sumCars();
// console.log(myCars2);
// let myCars3=new Cars('Mercedes Banse3','black3','250 003 y.e')
// myCars3.nameCars()
// myCars3.colorCars()
// myCars3.sumCars();
// console.log(myCars3);
// let myCars4=new Cars('Mercedes Banse4','black4','250 004 y.e')
// myCars4.nameCars()
// myCars4.colorCars()
// myCars4.sumCars();
// console.log(myCars4);
// let myCars5=new Cars('Mercedes Banse5','black5','250 005 y.e')
// myCars5.nameCars()
// myCars5.colorCars()
// myCars5.sumCars();
// console.log(myCars5);

//3
// class MyMath {
//   static round(a) {
//     console.log(Math.round(a));
//     return;
// }
//   static ceil(a) {
//     console.log(Math.ceil(a));
//     return;
// }
//   static floor(a) {
//     console.log(Math.floor(a));
//     return;
// }
//   static trunc(a) {
//     console.log(Math.trunc(a));
//     return;
// }
// }

// MyMath.round(12,990258);
// MyMath.ceil(12,8);
// MyMath.trunc(12,09);
// MyMath.floor(-5,05);

//4
// class Shakl{
//     constructor(title,border_color){
//         this.title=title;
//         this.border_color=border_color;

//     }
//     getTitle(){
//         console.log(`my name ${this.title}`);
//         return
//     }
//     getFullData(){
//         console.log(`04.03.23`);
//         return
//     }
//     getBorderColor(){
//         console.log(`my color ${this.border_color}`);
//         return
//     }
// }
// let uchburchak=new Shakl('uchburchak','black');
// uchburchak.getTitle()
// uchburchak.getFullData()
// uchburchak.getBorderColor();
// console.log(uchburchak);
// let tortburchak=new Shakl('tortburcha','black');
// tortburchak.getTitle()
// tortburchak.getBorderColor()
// tortburchak.getFullData();
// console.log(tortburchak);
// let aylana=new Shakl('aylana','black');
// aylana.getTitle()
// aylana.getBorderColor()
// aylana.getFullData();
// console.log(aylana);
// let tortburchak_togri=new Shakl('tortburcha_togri','black');
// tortburchak_togri.getTitle()
// tortburchak_togri.getBorderColor()
// tortburchak_togri.getFullData();
// console.log(tortburchak_togri);
// let kvadrat=new Shakl('kvadrat','black');
// kvadrat.getTitle()
// kvadrat.getBorderColor()
// kvadrat.getFullData();
// console.log(kvadrat);
// let romb=new Shakl('romb','black');
// romb.getTitle()
// romb.getBorderColor()
// romb.getFullData();
// console.log(romb);


//praktika
// Array.prototype.sameSTR = function (other) {
  //     let s=0
  //   for (let i = 0; i < other.length; i++) {
  //     if(typeof other[i]===typeof this[i]){
  //         s++
  //     }
  //   }
  //   return console.log(s === other.length);
//   let str = String(other);
//   let str1 = String(this);
// };
// let arr = [1, [1, 2], 3, 4];
// arr.sameSTR([3, [2], 5, 6]);

//5
// class MyMath {
//   static PI() {
//     console.log(Math.PI);
//     return;
//   }
// }
// MyMath.PI()

//6
// class MyDate{
//   static getFullYear() {
//      let year = new Date().getFullYear();
//      console.log(year);
//    }
//   static getMonth() {
//      let month = new Date().getMonth();
//      console.log(month);
//    }
//   static getDate() {
//      let data = new Date().getDate();
//      console.log(data);
//    }
//   static getDay() {
//      let day = new Date().getDay();
//      console.log(day);
//    }
//   static getHours() {
//      let hour = new Date().getHours();
//      console.log(hour);
//    }
//   static getMinutes() {
//      let min = new Date().getMinutes();
//      console.log(min);
//    }
//   static getSeconds() {
//      let s = new Date().getSeconds();
//      console.log(s);
//    }
//   static getMilliseconds() {
//      let s = new Date().getMilliseconds();
//      console.log(s);
//    }
//   static getTime() {
//      let s = new Date().getTime();
//      console.log(s);
//    }
// }
// MyDate.getFullYear()
// MyDate.getMonth()
// MyDate.getDate()
// MyDate.getDay()
// MyDate.getHours();
// MyDate.getMinutes();
// MyDate.getSeconds();
// MyDate.getMilliseconds();
// MyDate.getTime();

//7
// class Animals{
//   constructor(name,color){
//     this.title='animals'
//     this.name=name
//     this.color=color
//   }
// }
// class HomeA extends Animals {
//   constructor(title, name, color) {
//     super(title,name,color);
//     this.tur = "home animals";
//   }
// }
// class WildA extends Animals {
//   constructor(title, name, color) {
//     super(title, name, color);
//     this.tur = "wild animals";
//   }
// }
// class Dog extends HomeA{
//   constructor(title, name, color,tur){
//     super(title, name, color, tur)
//   }
// }
// class SHeep extends HomeA{
//   constructor(title, name, color,tur){
//     super(title, name, color, tur)
//   }
// }
// class Cow extends HomeA{
//   constructor(title, name, color,tur){
//     super(title, name, color, tur)
//   }
// }
// class Lion extends WildA{
//   constructor(title, name, color,tur){
//     super(title, name, color, tur)
//   }
// }
// class Rabbit extends WildA{
//   constructor(title, name, color,tur){
//     super(title, name, color, tur)
//   }
// }
// class Fox extends WildA{
//   constructor(title, name, color,tur){
//     super(title, name, color, tur)
//   }
// }
// class Wolf extends WildA{
//   constructor(title, name, color,tur){
//     super(title, name, color, tur)
//   }
// }
// console.log(new Dog("kuchuk", "black"));
// console.log(new SHeep("qoy", "black"));
// console.log(new Cow("sigir", "black"));
// console.log(new Lion("sher", "black"));
// console.log(new Rabbit("quyon", "black"));
// console.log(new Fox("tulki", "black"));
// console.log(new Wolf("bori", "black"));


