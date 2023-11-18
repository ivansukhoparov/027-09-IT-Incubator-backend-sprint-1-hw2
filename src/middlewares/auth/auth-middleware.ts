import {NextFunction, Request, Response} from "express";
import {btoa} from "buffer";
import {HTTP_STATUSES} from "../../utils/comon";

const login = "admin";
const password = "qwerty";

// middleware для проверки авторизации
export const basicAuthorizationMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const authInput = req.header("authorization")?.split(" ")[1]; // получаем значение Basic из заголовка
    const auth = btoa(`${login}:${password}`); // кодируем наши логин и пароль в basic64

    // сравниваем нашу пару логин:пароль закодированную в basic64 с парой, пришедшей в заголовке реквеста
    if (authInput !== auth) {
        // если пары не равны отправляем статус 401
        res.sendStatus(HTTP_STATUSES.UNAUTHORIZED_401)
    } else{
        // в противном случае переходим по цепочке дальше
        next();
    }
}