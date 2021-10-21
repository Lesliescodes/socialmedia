const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
    firstName: {
        type: String,
        unique: true,
        // required: true,'Hey you didnt introduce yourself'],
        trim: true,
    },
    lastName: {
        type: String,
        unique: true,
        // required: true,'What is your last name? '],
        trim: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        validate: [({length}) => length >=9, 'At least 9 really. '],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']

    },
    userCreated: {
        type: Date,
        default: Date.now
    },

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        
         
  }],
    },
  
  {
      toJSON: {
          virtuals: true
      }, 
      id: false
  }
  );;

  
  const User = model('User', UserSchema);
  
  module.exports = User;