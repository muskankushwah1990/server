const UserModel = require("../models/User")

class UserController {
    static insertUser = async (req, res) => {
        try {
            const {name, email} = req.body;
            const result = new UserModel(req.body);
            if(!result) {
                return res.status(404)
                     .json({status: "fail", message: "create user data not found"});
            }

            const saveuser = await result.save();
            res.status(200).json({
                status: "success",
                message: "User Insert successfully!",
                saveuser,
            })
        } catch (error) {
            res.status(590).json({status: "failed", message: error.message});
        }
    }

    static getAllUser = async (req, res) => {
      try {
        const users = await UserModel.find();
        res.status(200).json(users);
      } catch (error) {
        res.status(400).json({ status: "failed", message: error.message });
      }
    };


    //view user
    static viewUser = async (req, res) => {
      try {
        const data = await UserModel.findById(req.params.id)
        res.status(201).json(data)
      } catch (error) {
        console.log(error)
      }
    }


      // get specific tender by id
  static getUserById = async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id).populate("name");
      if (!user) {
        return res.status(404).json({ message: "User Not Found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "failed", message: error.message });
    }
  };


    static updateUser = async (req, res) => {
        try {
            const { name, email } = req.body;
            const data = await UserModel.findByIdAndUpdate(req.params.id, {
              name: name,
              email: email,
            });
            res.status(200).json({ 
              
              status: "success",
               msg: "user update successfully!",
               data,
            });
          } catch (error) {
            console.log(error);
          }
    }

    static deleteUser = async (req, res) => {
        try {
            const data = await UserModel.findByIdAndDelete(req.params.id)
            res
              .status(200)
              .json({ status: "success", message: "User Deleted Successfully!" });
          } catch (error) {
            console.log(error);
          }
    }

   
}

module.exports = UserController;