import {Request} from "express";

type VideoType ={
    id: number
    title:	string
    author:	string
    canBeDownloaded:	boolean
    minAgeRestriction:	number |null
    createdAt: 	string //($date-time)
    publicationDate:	string //($date-time)
    availableResolutions: typeof AvailableResolutions

}
type RequestWithParams<P> = Request<P,{},{},{}>
type RequestWithBody<B> = Request<{},{},B,{}>
type RequestWithBodyAndParams<P,B> =Request<P, {}, B, {}>
type Params ={
    id: string
}
type CreateVideoDto = {
    title: string
    author: string
    availableResolutions: typeof AvailableResolutions
}
type UpdateVideoDto = {
    title: string
    author: string
    availableResolutions: typeof AvailableResolutions
    canBeDownloaded: boolean
    minAgeRestriction: number|null
    publicationDate: string
}
type ErrorType = {
    errorsMessages:ErrorsMessageType[]
}
type ErrorsMessageType = {
    field:string
    message:string
}

const AvailableResolutions: string[] = [ "P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160" ];
let videos: VideoType[] = [
    {
        id : 0,
        title :   "string"  ,
        author :   "string"  ,
        canBeDownloaded : true,
        minAgeRestriction : null,
        createdAt :   "2023-11-07T22:36:07.308Z"  ,
        publicationDate :   "2023-11-07T22:36:07.308Z"  ,
        availableResolutions : [
            "P144"
        ]
    }
];