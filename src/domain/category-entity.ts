

export type categoryConstructorProps = {
    category_id?: string
    name: string
    description?: string
    isActive?: boolean
    created_At?: Date
}

export type categoryPropsComand = {
    name: string
    description: string | null
    isActive: boolean | null
}

export class Category {
    category_id: string;
    name: string;
    description?: string;
    isActive: boolean;
    created_At: Date;

    constructor(props: categoryConstructorProps) {
        this.category_id = props.category_id;
        this.name = props.name;
        this.description = props.description;
        this.isActive = props.isActive ?? true
        this.created_At = props.created_At ?? new Date()
    }

    static create(props: categoryConstructorProps): Category {
        return new Category(props);
    }
}