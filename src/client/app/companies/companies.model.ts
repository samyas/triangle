export class Company {
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
        ){}
}