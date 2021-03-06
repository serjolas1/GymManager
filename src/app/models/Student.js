import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcrypt';

class Student extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.STRING,
      altura: Sequelize.STRING
    }, {
      sequelize,
    });

    // this.addHook('beforeSave', async (user) => {
    //   if (user.password) {
    //     user.password_hash = await bcrypt.hash(user.password, 8);
    //   }
    // })
  }

  // checkPassword(password) {
  //   return bcrypt.compare(password, this.password_hash);
  // }
}

export default Student;