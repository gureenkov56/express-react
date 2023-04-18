// @description Login user
// @route POST /user/auth
// @access Public

import prisma from "../prisma.js"
import jwt from 'jsonwebtoken'

// @param {login, password}
export const authUser = async (req, res) => {
    const token = jwt.sign('Pit', process.env.ACCESS_TOKEN)
    res.json(`TOKEN: ${token} | name: PIT | hash: ${process.env.ACCESS_TOKEN}`)
}

export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany();

    res.json(users);
}