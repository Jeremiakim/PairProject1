const Controller = require("../controller/controller");
const router = require("express").Router();

router.get("/", Controller.showHome);
// router.get("/stores", Controller.showStore);
// router.get("/stores/add", Controller.showFormStore);
// router.post("/stores/add", Controller.addStore);
// router.get("/stores/:storeId", Controller.showDetail)
// router.get("/stores/:storeId/employees/add", Controller.showFormEm);
// router.post("/stores/:storeId/employees/add", Controller.addEmployee);
// router.get("/stores/:storeId/employees/:employeeId/edit", Controller.showFormEdit);
// router.post("/stores/:storeId/employees/:employeeId/edit", Controller.EditEmployee);
// router.get("/stores/:storeId/employees/:employeeId/delete", Controller.deleteEmployee);
// router.get("/employees", Controller.showDataEmployee);

module.exports = router;
