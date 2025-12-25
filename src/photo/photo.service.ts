import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './schema/photo.schema';

@Injectable()
export class PhotoService {
    constructor(
        // 'PHOTO_REPOSITORY' লিখুন, 'PhotoRepository' নয়
        @Inject('PHOTO_REPOSITORY') 
        private readonly photoRepository: Repository<Photo>,
    ) { }

    async findAll(): Promise<Photo[]> {
        return this.photoRepository.find();
    }
}