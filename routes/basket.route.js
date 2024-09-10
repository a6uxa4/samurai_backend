const express = require("express");
const {
  addToBasket,
  getBasketByUserId,
} = require("../controllers/basket.controller");
const router = express.Router();

router.post("", addToBasket);
router.get("", getBasketByUserId);

module.exports = router;
