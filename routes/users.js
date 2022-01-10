var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");

// Importing API Users controller
const usersController = require("../controllers/usersController");

// Importing backend validations
const registrationValidate = require("../middlewares/validation/registrationValidate");
const profileValidate = require("../middlewares/validation/profileValidate");
const avatarValidate = require("../middlewares/validation/avatarValidate");
const roleValidate = require("../middlewares/validation/roleValidate");
const restorePassMailValidate = require("../middlewares/validation/restorePassMailValidate");7
const newPassValidate = require("../middlewares/validation/newPassValidate");

// Importing middleware for protected routes
const masterWebTokenMiddleware = require("../middlewares/masterWebTokenMiddleware");
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");
const selfWebTokenMiddleware = require("../middlewares/selfWebTokenMiddleware");
const emailValidateJWTMiddleware = require("../middlewares/emailValidateJWTMiddleware");
const restorePassJWTMiddleware = require("../middlewares/restorePassJWTMiddleware");

// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dirImage = path.join("public", "images", "users");
    return cb(null, dirImage);
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      "Usuario" + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

/* GET home page. */
router.post(
  "/profile",
  profileValidate,
  selfWebTokenMiddleware,
  usersController.profile
);
router.post(
  "/avatar",
  selfWebTokenMiddleware,
  upload.single("avatar"),
  avatarValidate,
  usersController.avatar
);
router.post("/identify", selfWebTokenMiddleware, usersController.identify);
router.post("/login", usersController.login);
router.post("/register", registrationValidate, usersController.register);
router.get(
  "/validate/:jwt",
  emailValidateJWTMiddleware,
  usersController.validateacount
);
router.post("/forgotpass", restorePassMailValidate, usersController.forgotpass);
router.get(
  "/restorepass/:jwt",
  restorePassJWTMiddleware,
  usersController.restorepass
);
router.post("/newpass", newPassValidate, usersController.newpass);
router.delete(
  "/delete/:id",
  masterWebTokenMiddleware,
  selfWebTokenMiddleware,
  usersController.delete
);
router.patch(
  "/role/:id",
  masterWebTokenMiddleware,
  selfWebTokenMiddleware,
  roleValidate,
  usersController.role
);
router.get("/", adminWebTokenMiddleware, usersController.list);
router.get("/:id", adminWebTokenMiddleware, usersController.detail);

module.exports = router;
