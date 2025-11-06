
export interface TaskFormValues {
    title: string;
    description: string;
}

export interface Task extends TaskFormValues {
    id: string;
}