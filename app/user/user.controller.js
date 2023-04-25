
// @description Get user email
// @route GET /user/contacts/email
// @access Private (only auth)
export const getUserEmail = async (req, res) => {
    res.json({
        mess: 'Проверка по токену прошла успешно',
        email: req.user.email
    })
}