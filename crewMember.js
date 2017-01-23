// function CrewMember (position) {
//   this.position = position
//   this.currentShip  = "Looking for a Rig"
// }                    !== "Looking for a Rig"



function CrewMember (position) {
  this.position = position
  this.currentShip = null
}



CrewMember.prototype.chargePhasers = function () {
  if (this.position === "Gunner" && this.currentShip) {
    this.currentShip.phasersCharge = "charged!"
  }
  else {
    return  "had no effect"
  }
}

CrewMember.prototype.engageWarpDrive = function () {
  if (this.position === "Pilot" && this.currentShip) {
    this.currentShip.warpDrive = "engaged!"
  }
  else {
    return  "had no effect"
  }
}

CrewMember.prototype.setsInvisibility = function () {
  if (this.position === "Defender" && this.currentShip) {
    this.currentShip.cloaked = true
  }
  else {
    return  "had no effect"
  }
}
