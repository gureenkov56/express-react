import jwt from "jsonwebtoken";
import prisma from "../prisma.js"


export const protect = async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];

        const decoded = jwt.verify(token, process.env.SECRET_JWT_HASH);

        console.log('decoded', decoded);
        const userFound = await prisma.user.findUnique({
            where: {
                id: +decoded
            }
        })

        if (userFound) {
            req.user = userFound;
            console.log('userFound', userFound);
            next();
        } else {
            res.status(401)
            throw new Error('Auth token failed');
        }
    } else {
        res.status(401);
        throw new Error('You didn`t send Bearer token');
    }


}