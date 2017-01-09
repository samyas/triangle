export class Project {
    constructor(
        public id: string,
        public name: string,
        public address: string,
        public domain: string,
        public createdOn: string,
        public modifiedOn: string,
        public businessType: string,
        public email: string,
        public vat: string
        ) {}
}


export class Organisation {
    id: string;
}

export class Team {
    id: string;
    title: string;
    members: Array<Member> = [new Member()];
}


export class Member {
    id: string;
    name: string;
}


export class Budget {
    id: string;
    description: string;
    quantity: number;
    unitPice: number;
}
