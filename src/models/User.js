const Sequelize = require("sequelize");
const db = require("../config/dbconfig");

const User = db.define(
  "otp_login",
  {
    id: {
      type: Sequelize.STRING,
    },
    mobile_number: {
      type: Sequelize.STRING,
    },
    otp: {
      type: Sequelize.STRING,
    },
    verified: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
