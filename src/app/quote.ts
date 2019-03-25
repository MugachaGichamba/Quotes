export class Quote {
    
    public details: boolean;
    constructor(
        public id: number,
        public quote: string,
    public author: string,
    public submitter: string,
    public upVotes:number,
    public downVotes:number,
    public date: Date
    ) { 
        this.details=false;
    }
}