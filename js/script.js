class Clase {
    constructor(nombre, asistencia, idClave, horario) {
      this.nombre = nombre;
      this.asistencia = asistencia;
      this.idClave = idClave;
      this.horario = horario;
    }
  }
  
  const analisis = new Clase(
    "Análisis matemático",
    "https://eva.unl.edu.ec/mod/attendance/view.php?id=1490669",
    "",
    {
      lunes: ["9:30", "10:30", "https://cedia.zoom.us/j/99112977968"],
      martes: ["9:30", "10:30", "https://cedia.zoom.us/j/99112977968"],
      jueves: ["9:30", "10:30", "https://cedia.zoom.us/j/99112977968"],
    }
  );
  
  const desarrollo = new Clase("Desarrollo Basado en Plataformas", "", "dbp1", {
    lunes: [
      "11:30",
      "12:30",
      "https://cedia.zoom.us/j/83698286888?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS",
    ],
    miercoles: [
      "9:30",
      "10:30",
      "https://cedia.zoom.us/j/85431216183?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS",
    ],
    jueves: [
      "7:30",
      "8:30",
      "https://cedia.zoom.us/j/86531962180?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS",
    ],
    viernes: [
      "9:30",
      "10:30",
      "https://cedia.zoom.us/j/82425500435?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS",
    ],
  });
  
  const simulacion = new Clase("Simulación", "", "sml", {
    lunes: [
      "7:30",
      "8:30",
      "https://cedia.zoom.us/j/86758965501?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS",
    ],
    martes: [
      "11:30",
      "12:30",
      "https://cedia.zoom.us/j/81809511415?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS",
    ],
    viernes: [
      "11:30",
      "12:30",
      "https://cedia.zoom.us/j/82067448150?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS",
    ],
  });
  
  const fundamentos = new Clase(
    "Fundamentos en redes de comunicación",
    "https://eva.unl.edu.ec/mod/attendance/view.php?id=1515985",
    "reds",
    {
      miercoles: [
        "11:30",
        "12:30",
        "https://cedia.zoom.us/j/88377196284?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS",
      ],
      martes: [
        "7:30",
        "8:30",
        "https://cedia.zoom.us/j/88377196284?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS",
      ],
    }
  );
  const sistemas = new Clase(
    "Sistemas Digitales",
    "https://eva.unl.edu.ec/mod/attendance/view.php?id=1487431",
    "",
    {
      jueves: ["11:30", "12:30", "https://cedia.zoom.us/j/81222892109"],
      viernes: ["7:30", "9:30", "https://cedia.zoom.us/j/81222892109"],
      miercoles: ["7:30", "8:30", "https://cedia.zoom.us/j/81222892109"],
    }
  );
  
  const Clases = [analisis, desarrollo, fundamentos, simulacion, sistemas];
  const horaAct = new Date();
  
  const dias = ["0", "lunes", "martes", "miercoles", "jueves", "viernes"];
  
  const calculos = {};
  calculos.dia = function (name, n) {
    if (dias[n] == name) {
      return true;
    } else return false;
  };
  
  function entero(str = "") {
    let sum = "";
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == ":") {
        sum += ".";
      }
      sum += str.charAt(i);
    }
    let num = parseInt(sum, 10);
    return num;
  }
  
  function esElDia(inf, cen, sup) {
    let bandera = false;
    if (entero(inf) <= entero(cen) && entero(cen) <= entero(sup)) {
      bandera = true;
    } else {
      bandera = false;
    }
    return bandera;
  }
  
  const cadenaHora = horaAct.getHours() + ":" + horaAct.getMinutes();
  // logica ----------------------------------------------------------------------------------------------
  function clasesAutomatica() {
    if (!navigator.clipboard) {
      alert("cambia de navegador");
      return;
    }
    for (const clase of Clases) {
      for (const key in clase.horario) {
        if (esElDia(clase.horario[key][0], cadenaHora, clase.horario[key][1])) {
          console.log("el dia de la semana es ", horaAct.getDay());
          console.log(key, ": ", clase.horario[key][0]);
          if (calculos.dia(key, horaAct.getDay())) {
            if (clase.idClave != "") {
              console.log(clase.idClave);
              copiarAlPorta(clase.idClave);
            }
            if (clase.asistencia != "") {
              setTimeout(() => {
                abrirPesta(clase.asistencia);
              }, 1);
            }
            setTimeout(() => {
              abrirPesta(clase.horario[key][2]);
            }, 10);
          }
        }
      }
    }
  }
  
  clasesAutomatica();
  
  function copiarAlPorta(id = "") {
    var content = document.getElementById(id).innerHTML;
  
    navigator.clipboard
      .writeText(content)
      .then(() => {
        console.log("Text copied to clipboard...");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }
  
  function clikar(id = "") {
    document.getElementById(id).click();
  }
  
  function abrirPesta(link) {
    window.open(link);
  }
  
  // console.log('Ejecutando Clases '+Clases.analisis.link)
  
  validarDatos = () => {
    let correo = document.getElementById("idcorreo").value;
    let clave = document.getElementById("idclave").value;
    if (correo == "" || clave == "") {
      alert("Llene todos los campos.");
    } else {
      if (correo === "willian@gmail.com" && clave === "1234") {
        alert("Bienvenido");
        let url = "./landing.html";
        window.location = url;
      } else {
        alert("Los datos ingresados son incorrectos.");
      }
    }
  };
  
  contarDivs = () => {
    let divs = document.getElementsByTagName("div");
    for (const iterator of divs) {
      iterator.style.border = "solid #ffc107 5px";
    }
    alert(`En el documento existen ${divs.length}# divs.`);
  };
  
  
  
  
  enviarPagina = (url = "miperfil.html") => {
    document.location = url;
  };
  
  abrirPestania = (id = 0) => {
    let url = "";
    switch (id) {
      case 1:
        url = "https://cedia.zoom.us/j/99112977968";
        break;
      case 2:
        url = "https://eva.unl.edu.ec/mod/attendance/view.php?id=1490669";
        break;
      case 3:
        url = "https://eva.unl.edu.ec/course/view.php?id=29019";
        break;
      case 4:
        url =
          "https://cedia.zoom.us/j/83698286888?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS";
        break;
      case 5:
        url =
          "https://cedia.zoom.us/j/85431216183?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS";
        break;
      case 6:
        url =
          "https://cedia.zoom.us/j/86531962180?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS";
        break;
      case 7:
        url =
          "https://cedia.zoom.us/j/82425500435?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS";
        break;
      case 8:
        url = "https://eva.unl.edu.ec/course/view.php?id=29017";
        break;
      case 9:
        url =
          "https://cedia.zoom.us/j/86758965501?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS";
        break;
      case 10:
        url =
          "https://cedia.zoom.us/j/81809511415?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS";
        break;
      case 11:
        url =
          "https://cedia.zoom.us/j/82067448150?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS";
        break;
      case 12:
        url = "https://cedia.zoom.us/j/81222892109";
        break;
      case 13:
        url = "https://eva.unl.edu.ec/mod/attendance/view.php?id=1487431";
        break;
      case 14:
        url =
          "https://cedia.zoom.us/j/88377196284?uname=WILLIAN%20ENRIQUE%20CUEVA%20RIVAS";
        break;
      case 15:
        url = "https://eva.unl.edu.ec/mod/attendance/view.php?id=1515985";
        break;
  
      default:
        url = "https://eva.unl.edu.ec/my/";
        break;
    }
    window.open(url);
  };
  
  function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    console.log("tambien entró XD");
  }