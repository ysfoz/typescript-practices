import React from 'react'

const Functions = () => {

/**
 * fonksiyonlar yazilirken parametre turleride belirtilerek yazilir
 * yine donecek deger icin de bu sekilde belirtilebilir
 */
 const addition=(x:number,y:number):number => {
     return x+y
 }

 function subtraction(x:number,y:number) :number{
     return x - y
 }
// ! default ve ? ile opsiyonlarin son parameterede olmasi gerekir

 const addition2=(x:number,y:number=6):number => { // bu sekilde parametreye default bir deger atamis olduk
    return x+y
}

const addition3=(x:number,y?:number):number => { // '?' ile parametrenin zorunlu olmadi gosterilmis olur
    return y ? x + y : x
    
}



    return (
        <div>
            <p>{addition(2,5)} {subtraction(9,4)}</p>
            <p>{addition2(3)}</p>
            <p>{addition3(3)}</p>
        </div>
    )
}

export default Functions;