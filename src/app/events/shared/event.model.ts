export interface IEvent{
    id:number
    name:string
    date:Date
    time:string
    price:number
    imageUrl:string
    // ? mark indicates that this field can be null
    location?:{
        address:string
        city:string
        country:string
    },
    onlineUrl?:string
    sessions:ISession[

    ]
}
export interface ISession{
    id:number
    name:string
    presenter:string
    duration:number
    level:string
    abstract:string
    voters:string[]
}