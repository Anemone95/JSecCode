'use strict';


module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 按照mock的数据，有四个字段：name/age/sex/job lastTime是用来标记最后的更改时间
  const UserSchema = new Schema({
    username: {
      type: String,
    },
    tel: {
      type: String,
    },
    idcard: {
      type: String,
    },
    bankcard: {
      type: String,
    },
    lastTime: {
      type: Number,
    },
  });
  // 映射到egg-mongo db 库的users表中（不区分大小写）
  const user = mongoose.model('Users', UserSchema);

  // init方法放到这里
  initUserData(user, app);

  return user;
};

function initUserData(user, app) {
  user.find({}, (err, doc) => {
    if (err) {
      console.log(err);
      console.log('Init user failed');
    } else if (!doc.length) {
      console.log('Writing init data');

      app.mysql.select('users')
        .then(users => {
          users.forEach(u => {
            new user({
              username: u.username,
              tel: u.tel,
              idcard: u.idcard,
              bankcard: u.bankcard,
              lastTime: Date.now(),
            }).save();
          });
        });
    } else {
      console.log('Data exists');
    }
  });
}
