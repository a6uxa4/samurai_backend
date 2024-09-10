const { Basket } = require("../models/basket.model");

const addToBasket = async (req, res, next) => {
  try {
    const userId = Number(req.query.userId);
    const { productId, quantity, price } = req.body;
    let basket = await Basket.findOne({ userId });

    if (!basket) {
      basket = new Basket({ userId, products: [] });
    }

    const productIndex = basket.products.findIndex(
      (p) => p.productId === Number(productId)
    );

    if (productIndex > -1) {
      basket.products[productIndex].quantity += Number(quantity);
      basket.products[productIndex].price = Number(price);
    } else {
      basket.products.push({
        productId: Number(productId),
        quantity: Number(quantity),
        price: Number(price),
      });
    }

    basket.totalQuantity = basket.products.reduce(
      (acc, p) => acc + p.quantity,
      0
    );
    basket.totalSum = basket.products.reduce(
      (acc, p) => acc + p.quantity * p.price,
      0
    );

    await basket.save();
    res.status(200).json({ message: "Корзина обновлена", basket });
  } catch (error) {
    next(error);
  }
};

const getBasketByUserId = async (req, res, next) => {
  try {
    const userId = Number(req.query.userId);
    const basket = await Basket.findOne({ userId });

    res.status(200).json(basket);
  } catch (error) {
    next(error);
  }
};

module.exports = { addToBasket, getBasketByUserId };
