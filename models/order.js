const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  product: [
    {
      products: { type: Object, required: true },
      quantity: {
        type: Number,
        require: true,
      },
    },
  ],
  user: {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
});

module.exports = mongoose.model("Order", orderSchema);

// const Sequelize = require("sequelize");

// const sequelize = require("../util/database");

// const order = sequelize.define("order", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
// });

// module.exports = order;
