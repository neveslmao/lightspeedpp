import style from './assets/line.module.css'

export default function Line() {
  return (
    <div className={style.mainDiv}>
      <div className={style.number}>1</div>
      <textarea name="test" id="test" cols="1" rows="1"></textarea>
    </div>
  )
}
