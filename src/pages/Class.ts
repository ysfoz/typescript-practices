
export class Hause {
    rooms: number;
    windows: number;
    etage: number;



    constructor(rooms: number, windows: number, etage: number) {
        this.rooms = rooms;
        this.windows = windows;
        this.etage = etage;
    }

    properties() {
        return (`${this.rooms}, ${this.windows}, ${this.etage}`)
    }
}

export class Person {

    public age: string; // public aslinda defaultur , yazilmasa da olur. 
    //Hem class icersinden hem mirascilarindan hemde disaridan ulasilabilir

    private _country: string; //sadece bu class a ozeldir. ne mirascilarindan nede disardan ulasilabilir.

    protected job: string; // disardan ulasilamaz, encapsulation

    private _name?: string; // bu sekilde alt cizgi eklenebilir, burada ayni isimde get ve set fonksiyonlari oldugu icin yapmakta fayda var

    get name(): string {
        return `Mr ${this._name}`; //! get ile bir degeri cagirmis olduk
    }

    set name(title: string) {
        this._name = title //! set ile de degerimize yeni bir ozellik ekledik,
    }

    constructor(age: string, country: string, job: string) {
        this.age = age;
        this._country = country;
        this.job = job;

    }
    save() {
        return 'Person was saved'
    }
}

export class Costumer extends Person {
    Sell() {
        return `Something was sold ${this.age} ${this.job}` // country private oldugu icin ulasamiyoruz.
    }
}

export class Personel extends Person {
    salary() {
        return 'Salary was paid'
    }
}

