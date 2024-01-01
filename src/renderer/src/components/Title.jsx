import style from '../assets/title.module.css'

export default function Title() {
    return (<div>
        <textarea spellCheck='false' className={style.titleArea} name="title" id="title" cols="30" rows="1" placeholder="Title"></textarea>
    </div>
    )
}