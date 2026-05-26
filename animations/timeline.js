import gsap from "gsap"

export default class TimelineController{

constructor(){

this.timeline=gsap.timeline()

}

build(sceneManager){

this.timeline

.to({},{
duration:8,
onComplete:()=>{

sceneManager.nextScene()

}
})

.to({},{
duration:8,
onComplete:()=>{

sceneManager.nextScene()

}
})

.to({},{
duration:8,
onComplete:()=>{

sceneManager.nextScene()

}
})

.to({},{
duration:8,
onComplete:()=>{

sceneManager.nextScene()

}
})

.to({},{
duration:8,
onComplete:()=>{

sceneManager.nextScene()

}
})

.to({},{
duration:8,
onComplete:()=>{

sceneManager.nextScene()

}
})

.play()

}

}