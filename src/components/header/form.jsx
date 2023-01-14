import React from "react";
import icon from "../../img/icon.svg"
import search from "../../img/search.svg"
import c from "./header.module.css"

class Form extends React.Component {
    render() {
        return (
            <div className={c.conteiner}>
                <div className={c.headerImg}>
                    <img src={icon} />
                    <p>
                        Weather
                    </p>
                </div>
                <div className={c.form}>
                    <form onSubmit={this.props.weather}>
                        <input name={"city"} placeholder={"Город"}/>
                        <button><img src={search} /></button>
                    </form>
                </div>

            </div>
        )
    }


}

export default Form