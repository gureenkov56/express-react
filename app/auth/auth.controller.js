import prisma from "../prisma.js"
import jwt from 'jsonwebtoken'
import argon2 from "argon2"

// @description Get users list
// @route POST /users
// @access Public
export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany({});

    res.json(users);
}

// @description Reg new user
// @route POST /user/reg
// @access Public
// @param {login, password}
export const regUser = async (req, res) => {
    const { email, password, name } = req.body;

    const isUniqEmail = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (isUniqEmail) {
        res.status(400);
        throw new Error('Email is already exist');
    }

    const hashedPassword = await argon2.hash(password);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword
        }
    })

    const token = jwt.sign(user.email, process.env.ACCESS_TOKEN);
    res.json({ token });
}

// @description Login user
// @route POST /user/login
// @access Public
// @param {login, password}
export const loginUser = async (req, res) => {
    const {email, password} = req.body;

    const candidate = await prisma.user.findUnique({ 
        where: {
            email
        }
    })

    if (!candidate) {
        res.status(400);
        throw new Error('Email doesn`t exist');
    }

    const checkPassword = await argon2.verify(candidate.password, password);

    if (checkPassword) {
        const token = jwt.sign(email, process.env.ACCESS_TOKEN)
        res.status(200).json({token});
    } else {
        res.status(403)
        throw new Error('Password is wrong');
    }
}