import User from "../models/User.js";
import Farm from "../models/Farm.js";
import Loan from "../models/Loan.js";
import bcrypt from 'bcrypt';
// const User = require('../models/User');
// import { ObjectId } from 'mongodb';


const userController = {
    async getProfile(req, res) {
      try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    },
  
    

    async updateProfile(req, res) {
      try {
        const { firstName, lastName } = req.body;
        const user = await User.findByIdAndUpdate(req.user.id, { firstName, lastName }, { new: true }).select('-password');
        res.json(user);
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    },
  
    // async changePassword(req, res) {
    //   try {
    //     const { oldPassword, newPassword } = req.body;
    //     const user = await User.findById(req.user.id);
    //     if (!(await bcrypt.compare(oldPassword, user.password))) {
    //       return res.status(400).json({ message: "Incorrect current password" });
    //     }
    //     user.password = await bcrypt.hash(newPassword, 10);
    //     await user.save();
    //     res.json({ message: "Password updated successfully" });
    //   } catch (error) {
    //     res.status(500).json({ message: "Server error" });
    //   }
    // },



    async changePassword(req, res){
        try {
          const id= req.user.id;
              const user = await User.find(email);
            // const user = await User.findOne({ userName: req.body.userName });
        //   console.log(user);
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          const isMatch = await bcrypt.compare(req.body.oldPassword, user.password);
          if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
          }
          const salt = await bcrypt.genSalt(10);
          const newpassword= await bcrypt.hash(req.body.newPassword, salt);
          const updatedUser = await user.updateOne({ password: newpassword }, { new: true });
          res.status(200).json(updatedUser);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },

  async getAllUsers(req, res) {
    try {
        const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  async verifyUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(
          req.params.id,
          req.body,
          {  isVerified: true }
        );
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },


  async getAllLoans(req, res) {
    try {
      const loans = await Loan.find()
        .populate('farm', 'name location')
        .populate('investors.investor', 'name email');

      res.status(200).json(loans);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  async getAllFarms(req, res) {
    try {
      const farms = await Farm.find().populate('farmer', 'name email');
      res.status(200).json(farms);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
    },
    async deleteUser(req, res) {
        try {
          const user = await User.findByIdAndDelete(req.params.id);
          if (!user) return res.status(404).json({ message: "User not found" });
      
          res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
          res.status(500).json({ message: "Server error", error: error.message });
        }
      },
  
  
};
  
  export default userController;