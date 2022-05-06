let imgRandom=()=>{
    let x = Math.floor((Math.random() * 100) + 1);
    let xSmall=(300+x)
    let urlGenerator=`<img id="img" src="https://source.unsplash.com/random/${320}x${xSmall}/" alt="img">`
    return(urlGenerator)
}

let visualizaciones=()=>{
    let x = Math.floor((Math.random() * 100) + 1);
    console.log(10*x)
}

document.getElementById("img1").innerHTML=imgRandom()
document.getElementById("img2").innerHTML=imgRandom()
document.getElementById("img3").innerHTML=imgRandom()
document.getElementById("img4").innerHTML=imgRandom()
document.getElementById("img5").innerHTML=imgRandom()
