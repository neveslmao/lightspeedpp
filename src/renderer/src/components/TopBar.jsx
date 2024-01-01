import { useEffect, useState } from 'react'
import style from '../assets/topBar.module.css'

const { ipcRenderer } = require('electron')

export default function TopBar() {

    const [editStatus, setEditStatus] = useState('check_circle');

    const pressEdit = function () {
        if (editStatus === 'edit') {
            setEditStatus('check_circle');
        }

        if (editStatus === 'check_circle') {
            setEditStatus('edit');
        }
    }

    return <div className={style.mainDiv}>
        <span className={style.name}>lightspeed++</span>
        <span className={style.edit + " material-symbols-rounded"} id='editButton' onClick={pressEdit}>{editStatus}</span>
        <span className={style.settings + " material-symbols-rounded"}>settings</span>
        <div className={style.sep} />
        <span className={style.minimize + ' material-symbols-rounded'} onClick={() => ipcRenderer.send('minimize')}>remove</span>
        <span className={style.maximize + ' material-symbols-rounded'} onClick={() => ipcRenderer.send('maximize')}>check_box_outline_blank</span>
        <span className={style.close + ' material-symbols-rounded'} onClick={() => ipcRenderer.send('close')}>close</span>

    </div >
}