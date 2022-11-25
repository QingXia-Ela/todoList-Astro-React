import { atom, map } from "nanostores";
import type { ListItemProps } from "@/declare/store";

export const ListData = map<{
  [key: number]: ListItemProps
}>({})

let mapId = 0

export function addItem(item: ListItemProps) {
  ListData.setKey(mapId, item)
  mapId++
}

export function removeItem(id: number) {
  ListData.setKey(id, null)
  delete ListData.get()[id]
}

export function DeleteFinish() {
  const o = ListData.get()
  Object.keys(o).forEach((k) => {
    if (o[k].done) {
      ListData.setKey(parseInt(k), null)
      delete ListData.get()[k]
    }
  })
}

export function CheckAll(checked: boolean) {
  const o = ListData.get()
  Object.keys(o).forEach((k) => {
    o[k].done = checked
  })
}

export function removeAll() {
  const o = ListData.get()
  Object.keys(o).forEach((k) => {
    ListData.setKey(parseInt(k), null)
    delete ListData.get()[k]
  })
}