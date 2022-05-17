import {Controller, Get, Param} from '@nestjs/common';
import {InventoryService} from "./inventory.service";


@Controller('inventory')
export class InventoryController {

    constructor(private inventoryService: InventoryService) {
    }

    @Get(':id')
    test(@Param('id') id) {
        return this.inventoryService.test();
    }

    @Get('/processInventory/:idFile')
    processInventory(@Param('idFile') idFile): string {
        const info = this.inventoryService.readFile(idFile)
        const lines = info.split('\n');

        for (let i = 0; i < lines.length; i++) {
            if (i === 0) {
                this.inventoryService.addLineToFile(`Start File # ${idFile}, number of processes to run = ${lines[i]}`)
            }
            if (i > 0) {
                const data = lines[i].split(' ')
                if (data.length > 1) {
                    if (data[0].trim() === 'add') {
                        this.inventoryService.add(data[1].trim())
                    } else {
                        this.inventoryService.remove(data[1].trim())
                    }
                } else {
                    this.inventoryService.saveToFile(this.inventoryService.getList())
                }
            }
        }
        this.inventoryService.addLineToFile(`End File # ${idFile}`)
        return `End File # ${idFile}`
    }

}
