import mongoose, { Document, Schema } from 'mongoose'

interface IUser extends Document {
  name?: string
  email: string
  password: string
  avatar?: string
  date: Date
}
// 实例化数据模板
const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})
const User = mongoose.model<IUser>('users', UserSchema)
export default User
