import React from 'react'
import css from './style.module.css'

const Card = (props) => {
    const {
        day,
        temperature,
        data,
        forecast,
        icon
    } = props

    return (
    <div className={css.card}>
        <p className={css.card_day}>{day}</p>
        <p className={css.card_data}>{data}</p>
        <img className={css.card_icon} src={`${icon}`}></img>
        <p className={css.card_temperature}>{temperature}</p>
    </div>
  )
}

export default Card