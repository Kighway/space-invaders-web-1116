function Spaceship (name, crewArray, phasers, shields) {
  this.name = name
  this.crew = crewArray
  this.phasers = phasers
  this.shields = shields
  this.cloaked = false
  this.warpDrive = "disengaged"
  if (this.crew.length === 0) {
    this.docked = true
  } else {
    this.docked = false
  }
  this.phasersCharge = "uncharged"

  this.crew.forEach (function (CrewMember) {
    CrewMember.currentShip = this
  }, this)

  // for (var i = 0; i < this.crew.length; i++) {
  //   this.crew[i].currentShip = this
  // }
}
