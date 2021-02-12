import React from 'react'
import { KrediBase, MorgageKredit, BusinessKredit} from './AbstractCls'

const AbstracktClass = () => {
let mortgage = new MorgageKredit()
let business = new BusinessKredit()
console.log(mortgage.count)
console.log(business.count)

let kredit:KrediBase

kredit = new MorgageKredit()
console.log(kredit)
kredit = new BusinessKredit()
console.log(kredit)


    return (
        <div>
          <p>Abstract</p>  
        </div>
    )
}

export default AbstracktClass;
