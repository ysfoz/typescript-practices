import React from 'react'
import { Hause,Person,Personel,Costumer } from './Class'


export const Classes = () => {
let hause = new Hause(4,7,3)
let person = new Person('23','tr','it')
let costumer = new Costumer('23','tr','it')
let personel = new Personel('23','tr','it')
costumer.name = 'yusuf'

    return (
        <div>
            <p>{hause.properties()} {hause.windows}</p>
            <p>{person.save()}</p>
        {/* costumer ve personal persondan extend edildigi icin save methodunu miras olarak kullanabilir */}
            <p>{costumer.Sell()} {costumer.save()}</p> 
            <p>{personel.salary()}</p>
            <p>{costumer.name}</p>
        </div>
    )
}

export default Classes;