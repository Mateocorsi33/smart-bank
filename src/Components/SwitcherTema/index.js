import React from "react";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icono } from "../UI"


export default ({tema}) => {
    const temaClaro = <Icono src={themeOn} alt="Tema claro" />
    const temaOscuro = <Icono src={themeOff} alt="Tema oscuro" />

    return <>{tema ? temaOscuro : temaClaro}</>;
}

