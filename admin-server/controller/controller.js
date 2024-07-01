//find users

const User = require("../model/user");

exports.finduser = async (req, res) => {
  try {
    const user = await User.find();

    if (!user) {
      console.log("user not exist");
      res.status(400).json({ error: true, message: "user not exist" });
    }

    console.log({ user });
    console.log("Successfully find the user");
     res.status(200).json({ error: false, message: "user find", data: user });
  } catch (error) {
    console.log("Server error", error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};
