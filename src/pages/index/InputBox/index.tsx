import Styles from './index.module.scss'
import { useState } from 'react'
import { addItem } from '@/store/todoList';


function InputBox() {

  let [inputVal, changeInputVal] = useState('')

  function AddItem() {
    addItem({
      title: inputVal,
      done: false
    })
  }

  return (
    <div className={Styles.input_box}>
      <input type="text" value={inputVal} onChange={(e) => changeInputVal(e.target.value)} />
      <button onClick={AddItem}>添加</button>
    </div>
  );
}

export default InputBox;