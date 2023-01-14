import c from "./info.module.css"
import fog from "../../img/fog.svg"
import blizzard from "../../img/blizzard.svg"
import blowing from "../../img/blowing.svg"
import cloudy from "../../img/cloudy.svg"
import overcast from "../../img/overcast.svg"
import rain from "../../img/rain.svg"
import sleet from "../../img/sleet.svg"
import snow from "../../img/snow.svg"
import sunny from "../../img/sunny.svg"
import thunder from "../../img/thunder.svg"

function Info({temp,city,time}) {
    return(
        <div className={c.conteiner}>
                <h1>
                {temp} °
            </h1>
            <p>
                {time}
            </p>
            <p>
                {city}
            </p>
        </div>
    )
}

export default Info