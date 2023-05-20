class Bird {
    name: string;
    canFly: boolean;
    hasFeathers: boolean = true;

    constructor (name:string, canFly: boolean) {
        this.name = name;
        this.canFly = canFly;
    };

    flapWings {
        if (this.canFly)
        console.log(`${this.name}, can flap it's wings`);
        else 
        console.log(`${this.name} is a flightless bird`);
    };
}

let birds: Array<Bird> = [
    new Bird("Toucan", true),
    new Bird("Penguin", true),
    new Bird("Pigeon", true),
    new Bird("Emu", false)
];

birds.forEach((item:Bird)) => {
    item.flapWings();
};