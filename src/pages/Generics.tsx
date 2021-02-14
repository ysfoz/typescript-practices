import React from 'react'



const Generics = () => {

    function func1(x:number):number{
        return x
    }
    function func2(x:string):string{
        return x
    }
    let value1 = func1(7) // sadece number deger kabul eder
    let value2 =func2('kassel') // sadece string deger kabul eder


    function func3<T>(x:T):T{ //! bu sekilde olusturdugumuzda bir tip belirlemedik, her degeri kabul edecektir.
        return x
    }

    let value3 = func3(5)
    let value4 = func3('Paris')

    //? classlar ile bu sekilde bir kullanimi da var.
    // class GenericClass<T>{  
    //     value : T;
    //     func(x:T):T {
    //         return x
    //     }
    // }


    return (
        <div>
            <p>{value1}</p>
            <p>{value2}</p>
            <p>{value3}</p>
            <p>{value4}</p>
        </div>
    )
}
export default Generics;