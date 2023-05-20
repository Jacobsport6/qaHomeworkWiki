class Employee {
    id: number;
    name: string;
    phone: number;
    email: string;
    // set out properties with a constructor;
    //these are all required properties
    constructor(id:number, name:string, phone:number, email:string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
    };
};

toString():string{
    let output = 
    `Employee Record -------- ID: ${this.id}\n` + 
    `\tName: ${this.name}\n` +
    `\tContact Information\n` +
    `\tPhone:  ${this.phone}\n` +
    `\tEmail: ${this.email}`;
    return output;
};

let oneAndOny = new Employee (
    1, 
    "Trevor Phillips",
    8011234567,
    "Trevor@gmail.com"
);

console.log(oneAndOny.toString()
);
