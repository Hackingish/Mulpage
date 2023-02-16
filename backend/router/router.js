const router = require("express").Router();
const User = require("../model/userModel");
router.post("/", async (req, res) => {
  try {
    const { firstname, lastname, contact, email, gender } = req.body;
    console.log(firstname);
    console.log(lastname);
    console.log(contact);
    console.log(email);
    console.log(gender);
    if (!firstname || !lastname || !contact || !email || !gender) {
      res.status(400);
      throw new Error("please Enter all the crderntial fileds");
    }
    const user = await User.create({
      firstname,
      lastname,
      contact,
      email,
      gender,
    });
    if (user) {
      res.status(200).json({
        email: user.email,
      });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
