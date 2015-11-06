module.exports = function(app) {
  var Schema = require('mongoose').Schema;
  var bcrypt = require('bcrypt-nodejs');

  var UserSchema = Schema({
    name: String,
    email: String,
    password: String,
    created_at: {
      type: Date,
      default: Date.now
    }
  });

  UserSchema.methods.toJSON = function(){
    var user = this.toObject();
    delete user.password;

    return user;
  };

  UserSchema.pre('save', function(next){
    var user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt){
      if(err) return next(err);

      bcrypt.hash(user.password, salt, null, function(err, hash){
        if(err) return next(err);
          user.password = hash;
          next();
      });
    });
  });

  return db.model('user', UserSchema);
};
