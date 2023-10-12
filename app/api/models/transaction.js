const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const TransactionSchema = new Schema({
  name:{type:String, required:true},
  price: {type:Number, default:0},
  description:{type:String, default:''},
  datetime:{type:Date, default:Date.now},
});

const TransactionModel = model('Transaction',TransactionSchema);

module.exports = TransactionModel;
