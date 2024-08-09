import Team from './Team';

export default class Competition {
  constructor(name, logoUrl, rules, teams) {
    this.name = name;
    this.logoUrl = logoUrl;
    this.rules = rules.split('\n').map(rule => rule.trim());
    this.teams = teams.map(t => new Team(t.name, t.players));
  }
}
