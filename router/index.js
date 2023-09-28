const Controller = require("../controller/controller");
const UserController = require("../controller/UserController");

const router = require("express").Router();

router.get("/", Controller.showHome);
router.get("/package/add", Controller.showForm);
router.post("/package/add", Controller.addPackage);
router.post("/package/transaction", Controller.addPackage);
router.post("/package/add", Controller.addPackage);


//Pembuatan register
router.get('/register', UserController.registerForm)
router.post('/register', UserController.postRegister)

// Pembuatan Login
router.get('/login', UserController.loginForm)
router.post('/login', UserController.postLogin)



router.get('/', UserController.homePage)


module.exports = router;
