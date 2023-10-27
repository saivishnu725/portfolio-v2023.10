const blob = document.getElementById("blob");

window.onpointermove = event => {
    console.log("event ");
    const { clientX, clientY } = event;
    console.log(clientX + " " + clientY);
    if (window.scrollY <= window.innerHeight) {
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" });
    }
}
