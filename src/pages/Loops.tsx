import React from 'react'

export const Loops = () => {
const cityList = ['bonn','koln','kassel'] 

const forIn = (list:string[]) => { // indexleri gosteriri
    for(let i in list){
        console.log(i)
    }
}

const forOf = (list:string[]) => { // icerisindeki degerleri getirir.
    for(let i of list) {
        console.log(i)
    }
}
    return (
        <div>
            {forIn(cityList)}
            {forOf(cityList)}
        </div>
    )
}

export default Loops
