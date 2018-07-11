// MORNING EXERCISE - 7/9
//
// Create an interface for an auctioning service that allows users to place bids on products. When a bid is placed, update the display to reflect the current highest bid.
//
// :: BONUS ::
//
// Allow users to remove bids and if a highest bid is removed then display the next highest
console.log("Everything is in control.");
alert("Welcome To BS Auctions");
defaultName = "Auction Start"
defaulAmount = 0;
displayBidderName.innerHTML = defaultName;
displayBidAmount.innerHTML = defaulAmount;
function placeBid() {
  // if ((displayBidAmount.innerHTML = defaulAmount) < (displayBidAmount.innerHTML = bidAmount)) {
  bidderName = document.getElementById("bidderName").value;
  bidAmount = document.getElementById("bidAmount").value;
displayBidderName = document.getElementById("displayBidderName");
displayBidAmount = document.getElementById("displayBidAmount");
displayBidderName.innerHTML = bidderName;
displayBidAmount.innerHTML = bidAmount;
// }
}
function renegBid() {
  displayBidderName = document.getElementById("displayBidderName")
  displayBidAmount = document.getElementById("displayBidAmount");
  displayBidderName.innerHTML = bidderName2;
  displayBidAmount.innerHTML = bidAmount2;
}
function placeBid2() {
  // if (bidAmount2 > bidAmount || bidAmount2 > bidAmount2)  {
  bidderName2 = document.getElementById("bidderName2").value;
  bidAmount2 = document.getElementById("bidAmount2").value;
displayBidderName = document.getElementById("displayBidderName");
displayBidAmount = document.getElementById("displayBidAmount");
displayBidderName.innerHTML = bidderName2;
displayBidAmount.innerHTML = bidAmount2;
// }
}
function renegBid2() {
  displayBidderName = document.getElementById("displayBidderName")
  displayBidAmount = document.getElementById("displayBidAmount");
  displayBidderName.innerHTML = bidderName;
  displayBidAmount.innerHTML = bidAmount;
}
