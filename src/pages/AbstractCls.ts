export abstract class KrediBase{
    constructor(){

    }
    save():void{
        console.log('saved') // bu bir tamamlanmis islem ve her yerden bu seklide kullanilir.
    }

    abstract count():void; // bu ise abstact bir method miras alinir, ve her mirasci bunu kendi istedigi sekilde kullanir

}

//! abstraction ile count fonksiyonu ihtiyac halinde degisiklik yapilarak kullanilabilir. diger turlu bu islemleri
// if bloklari gibi kod yazarak yapmak gerekirdi, bu da cok fazla kod yazilmasina neden olur.
export class MorgageKredit extends KrediBase {
    constructor(){
        super();
    }
    count():void{
        console.log('Mortgage')
    }

}

export class BusinessKredit extends KrediBase {
    constructor(){
        super();
    }
    count():void{
        console.log('Business')
    }

}
