const { Router } = require("express");

const {GET_RESTAURANTS} = require("../controllers/restaurants")
const router = Router()


router.get("/res", GET_RESTAURANTS);


module.exports = {
    router
}