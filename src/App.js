import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Principal from "./components/Principal";
import Favoritos from "./components/Favoritos";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  let albumInicial = JSON.parse(localStorage.getItem("album"));
  if (!albumInicial) {
    albumInicial = [];
  }

  useEffect(() => {
    if (albumInicial) {
      localStorage.setItem("album", JSON.stringify(album));
    } else {
      localStorage.setItem("album", JSON.stringify([]));
    }
  }, [albumInicial]);

  const [url, editar] = useState({
    //img: "",
    id:"",
    image: "",
    name:"",
    location:"",
    status:"",
    fondo:""
  });

  const consultarApi = async () => {

    function getRandomInt(max){
      return Math.floor(Math.random() * max);
    }
  
    const numero =  getRandomInt(800)

    try {
      const api = await fetch("https://rickandmortyapi.com/api/character/" + numero);
      const resultado = await api.json();

      let estadoActual = ''
      if(resultado.status == 'Alive'){      
         estadoActual = '#145A32'
        }
      if(resultado.status == 'Dead'){
         estadoActual ='#A93226'
        }
      if(resultado.status == 'unknown'){
        estadoActual = '#909497'
        }

      editar({
        id: resultado.id,
        image: resultado.image,
        name: resultado.name,
        location: resultado.location.name,
        status: resultado.status,
        fondo: estadoActual
      });


      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  const [album, setAlbum] = useState(albumInicial);

  const borrarImg = (id) => {
    const nuevoAlbum = album.filter((url) => url.id !== id);
    setAlbum(nuevoAlbum);
  };

  return (
    <>
      <Header></Header>
      <Principal
        url={url}
        consultarApi={consultarApi}
        album={album}
        setAlbum={setAlbum}
      ></Principal>
      <Favoritos album={album} borrarImg={borrarImg}></Favoritos>
      <Footer></Footer>
    </>
  );
}

export default App;
