export interface ConsultFeedback {
    id : (timestap|null)[],
    client_id : string | null,
    nutritionist_message : string | null
}

export interface timestap {
    timestamp : number| null,
    machine : number| null,
    pid : number| null,
    increment : number| null,
    creationTime : string| null
} 