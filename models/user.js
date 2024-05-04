const mongoDb = require("mongodb");
const getDb = require("../util/database").getDb;
class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart;
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection("user").insertOne(this);
  }

  addToCart(product) {
    const cartProductIndex = this.cart.items.findIndex((cp) => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = 1;
    const updatedItem = [...this.cart.items];

    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedItem[cartProductIndex].quantity = newQuantity;
    } else {
      updatedItem.push({
        productId: new mongoDb.ObjectId(product._id),
        quantity: newQuantity,
      });
    }

    const updatedCart = { items: updatedItem };
    const db = getDb();
    db.collection("user").updateOne(
      { _id: new mongoDb.ObjectId(this._id) },
      { $set: { cart: updatedCart } }
    );
  }

  getCart() {
    const db = getDb();
    const productId = this.cart.items.map((i) => {
      return i.productId;
    });

    return db
      .collection("products")
      .find({ _id: { $in: productId } })
      .toArray()
      .then((products) => {
        return products.map((p) => {
          return {
            ...p,
            quantity: this.cart.items.find((c) =>  { return c.productId.toString() === p._id.toString()}).quantity
          };
        });
      });
  }

  deleteItemFromCart(productId){
    const updatedItem=this.cart.items.filter((_item)=> {return  _item.productId.toString()!==productId.toString()});;

    const db = getDb();
    return db.collection("user").updateOne(
      { _id: new mongoDb.ObjectId(this._id) },
      { $set: { cart: updatedItem } }
    );
  }

  static findById(userId) {
    const db = getDb();

    return db
      .collection("user")
      .find({ _id: new mongoDb.ObjectId(userId) })
      .toArray()
      .then((user) => {
        console.log(user);
        return user[0];
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
