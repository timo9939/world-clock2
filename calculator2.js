let LosAngles= document.querySelector('#firstCity')
let London= document.querySelector("#london")
const HongKong= document.querySelector("#hongKong")




function calculateTime(){
    // document.querySelector("#london").value=hours
    const v1=LosAngles.value
    console.log(LosAngles)
    let hours1 = parseInt(v1.split(":")[0], 10)+8;
    let hours2=(hours1+7)
    const minutes1=v1.split(":")[1]
    const minutes2=minutes1
    if(hours1>=24){
hours1= hours1-24
hours2= hours2-24
document.querySelector("#london").value='Day2 '+hours1+":"+minutes1
document.querySelector("#hongKong").value='Day2 '+hours2+":"+minutes2
    }

    else if(hours2>=24){
        hours2= hours2-24
        document.querySelector("#london").value=hours1+":"+minutes1
        document.querySelector("#hongKong").value='Day2 '+hours2+":"+minutes2
    }

    else{
          
    document.querySelector("#london").value=hours1+":"+minutes1
    document.querySelector("#hongKong").value=hours2+":"+minutes2
}
    }
  

