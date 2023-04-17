// @description Login user
// @route POST /user/auth
// @access Public
// @param {login, password}
export const authUser = async (req, res) => {
    res.json("You are logged in! Cool!")
}