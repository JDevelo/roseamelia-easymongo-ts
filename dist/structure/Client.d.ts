export default class MongoClient {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
    useFindAndModify: boolean;
    useCreateIndex: boolean;
    mongoose: any;
    chalk: any;
    constructor(ops?: {
        useNewUrlParser: boolean;
        useUnifiedTopology: boolean;
        useFindAndModify: boolean;
        useCreateIndex: boolean;
    });
    connect(url?: string): Promise<void>;
    disconnect(): Promise<void>;
    on(message?: string): Promise<void>;
    off(message?: string): Promise<void>;
}
