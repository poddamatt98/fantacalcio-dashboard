export default class Player {
    constructor(name, role, startingFCPrice, buyPrice, actualFCPrice) {
      this.name = name;
      this.role = role;
      this.startingFCPrice = startingFCPrice;
      this.buyPrice = buyPrice;
      this.actualFCPrice = actualFCPrice;
      this.soldPrice = this.calculateSoldPrice();
    }
  
    calculateSoldPrice() {
      const factor = Math.min(Math.max(this.actualFCPrice / this.startingFCPrice, 0.5), 2);
      return Math.round(factor * this.buyPrice);
    }
  }
  