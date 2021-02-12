import React from 'react';


function Values() {

function greter(name:string){
  return `hello ${name}`
}
/**
 * values - bir deger girilecekse bu degerin turu belirtilmelidir.
 *  ama zaten js kodlari da yazilabildiginden bu tur belirtilmese de sorun olmaz
 */

//number
let num :number
num = 5.3
//string
let city:string
city = 'Kassel'
//boolean
let isRight: boolean
isRight = true

//array
let numbers: number[] = [1,2,3]
//array with generic -- ayni sonucu aliriz ama bu seklide olusturdugumuz bir formatta degerler alabiliriz.
let numbers2:Array<number> = [4,5,6]

// bu sekilde 2 ayri veri tipi ayni listede tutulabilir.
let tupple : [number,string] = [7,'love']

//js gibi yazmak ta mumkun
let age = 20

// ! ENUM
 //class mantiginda, bu yuzden buyuk harfle yazilir

enum Colors {red=1,black,purple} // 1 baslangic degeri vermek icin, digerleri otomak 2 ve 3 olacak
enum Colors2 {red='rot',black='schwarz',purple='lila'}
let color = Colors.red
let color2 = Colors2.black

// ! ANY
//gelecek veri tipinden emin degilsek kullanilir
let notSure:any = 'Bonn'
notSure = 3

//! VOID 
//tipi ozellikle fonksiyonlarda kullanilir, geriye birsey dondurmek istemedigimizde kullanilir

let void_value :void = undefined // burada undefined yerine bir deger atasak , hata aliriz
function printer():void{
  console.log('hello')
  // return 'hello' --bu sekilde return versek hata aliriz, void olunca return yapamayiz
}


  return (
    <div className="App">
      <p>{greter('yusuf')}</p>
      <p>{num} {city} {age} {isRight && 'true'} {numbers} {numbers2} {tupple}</p>
      <p>{color} {color2}</p>
    </div>
  );
}

export default Values;
