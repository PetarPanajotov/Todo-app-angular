export interface Task {
    id: string,
    name: string,
    createdOn: string,
    description: string,
    dueTo: any,
    tags: string[]
}
export interface TaskDraggable {
    content: Task
}

export interface Category {
    id: string,
    title: string,
    draggableItem: TaskDraggable[]
}

export interface DropzoneLayout {
    container: string;
    list: string;
    dndHorizontal: boolean;
}