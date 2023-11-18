import {body} from "express-validator";

const validatePostBlogName = body("name").trim().isString().notEmpty().isLength({min: 1, max: 15});
const validatePostBlogDescription =  body("description").isString().isLength({min: 0, max: 500});
const validatePostBlogUrl = body("websiteUrl").isString().isURL().isLength({min: 10, max: 110});

export const validationBlogsChains =()=> [validatePostBlogName,validatePostBlogDescription,validatePostBlogUrl]