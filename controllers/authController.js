import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const authController = {
  async register(req, res) {
        try {
        console.log("uday");
      const { firstName, lastName, email, password, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ firstName, lastName, email, password: hashedPassword, role });
      res.status(201).json({ message: "User registered successfully" ,user});
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
      res.json({ token,role:user.role});
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    } 
  }
};
export default authController; 