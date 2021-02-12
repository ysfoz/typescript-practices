import React from 'react'

export const Interface = () => {

    //interface ile olusturuldugunda icerisindeki degerlerin mutlaka giilmesi gerekir. 
    // aynisi class ile de yazilabilir ama , class ile olusturuldugunda degerlerin tamami girilmek zorunda degil.
    // tipki class larda oldugu gibi icerisine tamamlanmamis foksiyinlarda alabilir.

    //! INTERFACE
    interface Product {
        id:number;
        name:string;
        unitPrice:number;
    }

    function save(product:Product){
        return `${product.name} was sold`
    }

   
  
    return (
        <div>
            <p>{save({id:1,name:'laptop',unitPrice:10})}</p>
        </div>
    )
}

export default Interface;
