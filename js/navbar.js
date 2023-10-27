const blob = document.getElementById("blob");

window.onpointermove = event => {
    console.log("event ");
  const { clientX, clientY } = event;
  console.log(clientX + " " + clientY);
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}
