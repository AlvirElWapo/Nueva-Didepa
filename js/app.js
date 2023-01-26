
    var flecha = document.getElementById("flecha_img");
    flecha.classList.add("rotate");
document.getElementById("boton_").onclick = function() 
{
    var x = document.getElementById("contenedor_navbar");
    if (x.style.display === "none") 
    {
      x.style.display = "flex";
      flecha.classList.remove("rotate");
    } else 
    {
      x.style.display = "none";
      flecha.classList.add("rotate");
    }
  };