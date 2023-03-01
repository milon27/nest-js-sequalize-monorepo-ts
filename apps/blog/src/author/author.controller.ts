import { Controller, Get } from '@nestjs/common';

@Controller('author')
export class AuthorController {

    @Get()
    getAuthor() {
        return 'herleoo'
    }
}
