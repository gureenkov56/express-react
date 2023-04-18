// @description Login user
// @route POST /user/auth
// @access Public

import prisma from "../prisma.js"

// @param {login, password}
export const authUser = async (req, res) => {
    res.json("You are logged in! Cool!")
}

export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany();

    res.json(users);
}