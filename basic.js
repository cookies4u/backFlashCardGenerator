// BasicCard constructor

// new will be required when creating a new instance
// var BasicCard = function (front, back) {
// 	this.front = front;
// 	this.back = back;
// };

function BasicCard(front, back) {
  if(this instanceof BasicCard) {
    this.front = front;
    this.back = back;
  } else {
    return new BasicCard(front, back);
  }
}

// main.js has access
module.exports = BasicCard;
