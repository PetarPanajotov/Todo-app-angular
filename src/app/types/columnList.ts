import type { EffectAllowed } from "ngx-drag-drop"

interface contentItem {
    name: string,
    createdOn: string
}


export interface DraggableItem {
    content: contentItem,
    effectAllowed: EffectAllowed,
    disable: boolean,
    handle: boolean,
}
export interface Category {
    id: string,
    title: string,
    draggableItem: DraggableItem[]
}

export interface DropzoneLayout {
    container: string;
    list: string;
    dndHorizontal: boolean;
}