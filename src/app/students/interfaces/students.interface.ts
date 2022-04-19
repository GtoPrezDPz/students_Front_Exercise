export interface Student {
    id?: string;
    name: string;
    publisher: Publisher;
    city: string;
    email: string;
    phone: string;
    alt_img?: string;
}

export enum Publisher {
    ID = "id",
    Name = "name",
}

