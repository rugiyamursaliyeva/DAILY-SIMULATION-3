import BasketModel from "../models/basketModule.js"

const getBaskets = async (req, res) => {
    const baskets = await BasketModel.find()
    res.json(baskets)
}

const postBasket = async (req, res) => {
    const {image, name, price} = req.body
    const basket = {image, name, price}
    await BasketModel.create(basket)
    res.json(basket)
}

const deleteBasket = async (req, res) => {
    const {id} = req.params
    await BasketModel.findByIdAndDelete(id)
    res.json(`${id} -li basket silindi`)
}

export {getBaskets, postBasket, deleteBasket}