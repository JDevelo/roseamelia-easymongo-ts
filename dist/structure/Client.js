"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class MongoClient {
    constructor(ops = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }) {
        this.useNewUrlParser = ops.useNewUrlParser || true;
        this.useUnifiedTopology = ops.useUnifiedTopology || true;
        this.useFindAndModify = ops.useFindAndModify || false;
        this.useCreateIndex = ops.useCreateIndex || true;
        this.mongoose = require('mongoose');
        this.chalk = require('chalk');
    }
    ;
    connect(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!url || (typeof (url) !== "string"))
                throw new ReferenceError('An invalid url was provided');
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.mongoose.disconnect();
        });
    }
    on(message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!message) {
                return console.log(`${this.chalk.green("[ Easymongo ]")} Mongodb is now connected`);
            }
            else {
                return console.log(`${this.chalk.green("[ Easymongo ]")} ` + message);
            }
        });
    }
    off(message) {
        return __awaiter(this, void 0, void 0, function* () {
            this.mongoose.connection.on('disconnected', () => __awaiter(this, void 0, void 0, function* () {
                if (!message) {
                    return console.log(`${this.chalk.red("[ Easymongo ]")} Mongodb is disconnected`);
                }
                else {
                    return console.log(`${this.chalk.red("[ Easymongo ]")} ` + message);
                }
            }));
        });
    }
}
exports.default = MongoClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0cnVjdHVyZS9DbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFxQixXQUFXO0lBTzVCLFlBQVksR0FBRyxHQUFHO1FBQ2QsZUFBZSxFQUFFLElBQUk7UUFDckIsa0JBQWtCLEVBQUUsSUFBSTtRQUN4QixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLGNBQWMsRUFBRSxJQUFJO0tBQ3ZCO1FBQ0csSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQTtRQUNsRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQTtRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FBQTtRQUNyRCxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFBO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFBQSxDQUFDO0lBRUksT0FBTyxDQUFDLEdBQVk7O1lBQ3RCLElBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxDQUFDO2dCQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtRQUNuRyxDQUFDO0tBQUE7SUFFSyxVQUFVOztZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDOUIsQ0FBQztLQUFBO0lBRUssRUFBRSxDQUFDLE9BQWdCOztZQUNyQixJQUFHLENBQUMsT0FBTyxFQUFFO2dCQUNULE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO2FBQ3RGO2lCQUFNO2dCQUNILE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUE7YUFDeEU7UUFDTCxDQUFDO0tBQUE7SUFDSyxHQUFHLENBQUMsT0FBZ0I7O1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBUyxFQUFFO2dCQUNuRCxJQUFHLENBQUMsT0FBTyxFQUFFO29CQUNULE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO2lCQUNuRjtxQkFBTTtvQkFDSCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFBO2lCQUN0RTtZQUNMLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7Q0FDSjtBQTdDRCw4QkE2Q0MifQ==