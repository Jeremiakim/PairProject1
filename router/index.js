const Controller = require("../controller/controller");
const UserController = require("../controller/UserController");

const router = require("express").Router();

router.get("/", Controller.showHome);
router.get("/package/add", Controller.showForm);
router.post("/package/add", Controller.addPackage);
// router.get("/stores/table/trx", Controller.showTable); //edit delete

// router.post("/stores/table/trx", Controller.showForm);


//Pembuatan register
router.get('/register', UserController.registerForm)
router.post('/register', UserController.postRegister)

// Pembuatan Login
router.get('/login', UserController.loginForm)
router.post('/login', UserController.postLogin)



router.get('/', UserController.homePage)


module.exports = router;
