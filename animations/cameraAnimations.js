import * as THREE from "three"

export default class CameraAnimation{

constructor(camera){

this.camera=camera

this.time=0

}

update(){

const speed = this.speedMultiplier !== undefined ? this.speedMultiplier : 1.0
this.time += 0.005 * speed

// Orbit movement

this.camera.position.x=
Math.sin(this.time)*8

this.camera.position.z=
20 + Math.cos(this.time)*5

// Smooth up-down movement

this.camera.position.y=
Math.sin(this.time*0.5)*3

// Always look toward center

this.camera.lookAt(
new THREE.Vector3(
0,
0,
0
)
)

}

}