import tempimg from "../../img/thermometer.svg"
import pressimg from "../../img/humidity.svg"
import precipimg from "../../img/evaporator.svg"
import wind from "../../img/wind.svg"
import c from "./weather.module.css"

function Weather({temp,pressure,precip,wind_speed,feelslike}) {
    return (
        <div className={c.conteiner}>
            <div>
                <div className={c.divImg}><img className={c.img} src={tempimg} /></div><p className={c.p}>Температура <span>{temp}° - Ощущается как {feelslike}° </span></p>
            </div>
            <div>
                <div className={c.divImg}><img className={c.img} src={pressimg} /></div><p className={c.p}>Давление <span>{pressure}mm/Hg - ртутного столба</span></p>
            </div>
            <div>
                <div className={c.divImg}><img className={c.img} src={precipimg} /></div><p className={c.p}>Осадки <span>{precip}мм</span></p>
            </div>
            <div>
                <div className={c.divImg}><img className={c.img} src={wind} /></div><p className={c.p}>Ветер <span>{wind_speed}м/c</span></p>
            </div>
        </div>
    )
}

export default Weather