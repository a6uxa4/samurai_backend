const express = require("express");
const {
  addToBasket,
  getBasketByUserId,
  deleteBasketByProductId,
} = require("../controllers/basket.controller");
const router = express.Router();

router.post("", addToBasket);
router.get("", getBasketByUserId);
router.delete("/:productId", deleteBasketByProductId);

module.exports = router;
