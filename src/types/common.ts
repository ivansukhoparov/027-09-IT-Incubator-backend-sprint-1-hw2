import {Request} from "express";

export type RequestWithParams<P> = Request<P,{},{},{}>
export type RequestWithBody<B> = Request<{},{},B,{}>
export type RequestWithBodyAndParams<P,B> =Request<P, {}, B, {}>
export type Params ={
    id: string
}
export type ErrorType = {
    errorsMessages:ErrorsMessageType[]
}
export type ErrorsMessageType = {
    field:string
    message:string
}

export const HTTP_STATUSES={
    OK_200:200,
    CREATED_201:201,
    NO_CONTENT_204:204,

    BAD_REQUEST_400:400,
    NOT_FOUND_404:404
}
