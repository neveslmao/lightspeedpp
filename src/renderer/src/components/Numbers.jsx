import style from '../assets/numbers.module.css'

export default function Numbers(props) {
    return <span className={style.number}>{props.number}</span>
}