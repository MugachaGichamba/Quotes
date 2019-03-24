export class Quote {
    public details: boolean;
    constructor(public name: string,
    public author:string,
    public votes:number,
    ) { 
        this.details=false;
    }
}