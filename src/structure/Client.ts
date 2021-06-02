export default class MongoClient {
    public useNewUrlParser: boolean;
    public useUnifiedTopology: boolean;
    public useFindAndModify: boolean;
    public useCreateIndex: boolean;
    public mongoose
    public chalk
    constructor(ops = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }) {
        this.useNewUrlParser = ops.useNewUrlParser || true
        this.useUnifiedTopology = ops.useUnifiedTopology || true
        this.useFindAndModify = ops.useFindAndModify || false
        this.useCreateIndex = ops.useCreateIndex || true
        this.mongoose = require('mongoose')
        this.chalk = require('chalk')
    };
    
    async connect(url?: string) {
        if(!url || (typeof (url) !== "string")) throw new ReferenceError('An invalid url was provided')
    }
    
    async disconnect() {
        this.mongoose.disconnect()
    }

    async on(message?: string) {
        if(!message) {
            return console.log(`${this.chalk.green("[ Easymongo ]")} Mongodb is now connected`)
        } else {
            return console.log(`${this.chalk.green("[ Easymongo ]")} ` + message)
        }
    }
    async off(message?: string) {
        this.mongoose.connection.on('disconnected', async () => {
            if(!message) {
                return console.log(`${this.chalk.red("[ Easymongo ]")} Mongodb is disconnected`)
            } else {
                return console.log(`${this.chalk.red("[ Easymongo ]")} ` + message)
            }
        })
    }
}