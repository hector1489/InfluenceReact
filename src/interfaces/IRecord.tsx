interface IRecord {
    id: number;
    image: string;
    image2?: string;
    title: string;
    description: string,
    characters?: string[],
    price: number;
    quantity?: number;
}

export default IRecord
