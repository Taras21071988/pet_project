import React, { useEffect, useState } from "react";
import cl from "./BlockFoto.module.scss";
import axios from "axios";
import Card from "../card/Card";
const BlockFoto = () => {
  const [fotos, setFoto] = useState([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:3001/foto__inst").then((res) => {
        setFoto(res.data);
      });
    } catch (error) {
      alert(error);
    }
  }, []);
  const rndFoto = () => {
    const rnd = [];
    for (let i = 0; i <= 1; i++) {
      rnd.push(Math.floor(Math.random() * fotos.length));
    }
    return rnd;
  };
  const idxses = rndFoto();
  return (
    <div className={cl.foto__wrapper}>
      <div className="container">
        <div className={cl.foto__schedule}>
          <h2 className={cl.schedule__text}> Расписание на июль</h2>
          <img
            className={cl.schedule__foto}
            width={560}
            height={560}
            src="/images/inst/schedule/jul.jpg"
            alt="schedule"
          />
        </div>
        <h2 className={cl.inst__title}>Полезные статьи</h2>
        <div className={cl.foto__inst}>
          {fotos
            .filter((it, id) => idxses.includes(id))
            .map((foto) => (
              <Card key={foto.id} foto={foto} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default BlockFoto;
