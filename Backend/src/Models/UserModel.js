import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true  },
  password: { type: String, required: true },
  number: { type: Number, required: true },
  location: { type: String, required: true },
  role: { type: String, required: true, default: 'user' },
}, { timestamps: true });

export const UsersModel = mongoose.model('PrivateUsers11', usersSchema);







