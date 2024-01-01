import Lines from './Lines.jsx'
import style from '../assets/textArea.module.css'
import Numbers from './Numbers.jsx'
import Title from './Title.jsx'

export default function TextArea(props) {
    return (
        <div className={style.mainDiv}>
            {/*<span className={style.numbersDiv}>
                {[...Array(+props.lines)].map((e, i) => <Numbers number={i + 1} key={i + 1} />)}
            </span>*/}
            <span className={style.linesDiv}>
                {/*<Title />*/}
                <Lines />
            </span>

        </ div>
    )
}