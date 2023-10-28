const blob = document.getElementById("blob");

window.onpointermove = event => {
    const { clientX, clientY } = event;
    if (window.scrollY <= window.innerHeight) {
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" });
    }
}
