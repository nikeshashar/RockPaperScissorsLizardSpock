function Player(name) {
	// initialize method goes here
	this.name = name;
};

Player.prototype.defeats = function(opponent) {
	return Game.prototype.PAIRS[this.pick]['beats'].indexOf(opponent.pick) !== -1;
};

Player.prototype.picks = function(pick) {
	this.pick = pick;
};


