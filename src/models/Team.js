import Player from './Player';

export default class Team {
  constructor(name, players) {
    this.name = name;
    this.players = players.map(p => new Player(p.name, p.role, p.startingFCPrice, p.buyPrice, p.actualFCPrice));
  }
}
