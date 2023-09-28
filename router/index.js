const Controller = require("../controller/controller");
const router = require("express").Router();

router.get("/", Controller.showHome);
router.get("/stores/add", Controller.showForm);
// router.post("/stores/add", Controller.addPackage);
router.get("/stores/table/trx", Controller.showForm);
router.post("/stores/table/trx", Controller.showForm);


module.exports = router;
