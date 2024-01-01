import { useEffect, useState } from 'react'
import style from '../assets/lines.module.css'
import Markdown from 'https://esm.sh/react-markdown@9'


const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function Line() {

  const [text, setText] = useState(lorem);
  const [edit, setEdit] = useState(true);

  useEffect(() => {
    const editor = document.getElementById('editor');
    const markdown = document.getElementsByClassName(style.preview);

    const hideEditor = function () {
      editor.style.display = 'none';
    }
    const showEditor = function () {
      editor.style.display = 'flex';
    }

    const hideMarkdown = function () {
      if (markdown[0]) { markdown[0].style.display = 'none'; }
    }
    const showMarkdown = function () {
      if (markdown[0]) { markdown[0].style.display = 'flex'; }
    }

    const editButton = document.getElementById('editButton')
    const clickHandler = () => {
      edit ? showMarkdown() : hideMarkdown();
      edit ? hideEditor() : showEditor();
      edit ? setEdit(false) : setEdit(true)
      editButton.removeEventListener('click', clickHandler);
    }

    editButton.addEventListener('click', clickHandler)


  })

  const updateText = event => {
    console.log(event.target.value)
    setText(event.target.value);
  }

  return (
    <>
      <textarea spellCheck="false" placeholder={lorem} id="editor" onChange={updateText} cols="1" rows="10" className={style.textArea} />
      <Markdown className={style.preview}>{text}</Markdown>
    </>
  )
}
