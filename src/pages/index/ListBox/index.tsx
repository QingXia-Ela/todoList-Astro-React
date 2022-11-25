import { ListData, removeAll, removeItem, DeleteFinish, CheckAll } from '@/store/todoList';
import type { ListItemProps } from '@/declare/store';
import Styles from './index.module.scss'
import { useStore } from '@nanostores/react';
import { useState } from 'react'

function ListBox() {
  const o = useStore(ListData)


  function GetAllSelect() {
    const p = ListData.get()
    return Object.keys(p).every((v) => {
      return p[v] && p[v].done ? true : false
    })
  }

  const [All, ChangeAll] = useState(false)

  function Delete(id: string) {
    if (confirm('Are u sure to delete it?')) {
      removeItem(parseInt(id))
    }
  }

  function GoCheckAll(checked: boolean) {
    CheckAll(checked)
    ChangeAll(checked)
  }

  function FinishCheck(id: string, c: boolean) {
    o[id].done = c
    ChangeAll(GetAllSelect())
  }

  function ConfirmDeleteAll() {
    if (confirm('Are u sure to delete all?')) {
      removeAll()
    }
  }

  return (
    <div className={Styles.list_box} key={+new Date()}>
      {
        Object.keys(o).map((v) => {
          const val = o[v]
          return val ? (
            <div className={Styles.item} key={v}>
              <input type="checkbox" defaultChecked={val.done} onChange={(e) => FinishCheck(v, e.target.checked)} />
              <span>{val.title}</span>
              <button onClick={() => Delete(v)}>删除</button>
            </div>
          ) : null
        })
      }
      {
        Object.keys(o).length ? (
          <div className={Styles.operate} key={+new Date()}>
            <div className={Styles.full_check}>
              <input type="checkbox" defaultChecked={All} onChange={(e) => GoCheckAll(e.target.checked)} />
              <span>全选</span>
            </div>
            <div className={Styles.operate_button}>
              <button onClick={DeleteFinish}>删除选中</button>
              <button onClick={ConfirmDeleteAll}>全部删除</button>
            </div>
          </div>
        ) : null
      }
    </div>
  );
}

export default ListBox;