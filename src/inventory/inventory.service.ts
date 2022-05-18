import {Injectable} from '@nestjs/common';

const fs = require('fs')


@Injectable()
export class InventoryService {

    path = './src/inventory/files/'
    finalPath = `${this.path}output.txt`;
    items = []

    test() {
        return 'It is alive...'
    }

    add(name) {
        if (!name) return
        if (!this.items.includes(name) && this.items.length < 10) {
            this.items.unshift(name)
        }
    }

    remove(name) {
        this.items = this.items.filter(item => item !== name)
    }

    getList() {
        return this.items
    }

    saveToFile(data) {
        if (data.length > 0) {
            fs.appendFileSync(this.finalPath, `${data.join()}\n`);
        } else {
            fs.appendFileSync(this.finalPath, 'No items\n');
        }

    }

    addLineToFile(message) {
        fs.appendFileSync(this.finalPath, `${message}\n`);
    }

    readFile(idFile: string) {
        const path = `${this.path}${idFile}.txt`
        console.log(path)
        if (!fs.existsSync(path)) {
            return null;
        }
        return fs.readFileSync(path, {encoding: 'utf-8'});
    }


}
