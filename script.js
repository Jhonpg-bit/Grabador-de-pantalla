async function grabarPantalla(){
    const stream= await navigator.
    mediaDevices.getDisplayMedia({ video:true});
    const video= document.createElement("video");
    video.srcObject=stream;
    video.autoplay= true;
    document.body.appendChild(video);
}