import { DataSource } from 'typeorm';
import { Photo } from '../schema/photo.schema';

export const photoProviders = [
    {
        provide: 'PHOTO_REPOSITORY', 
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
        inject: ['DATA_SOURCE'],
    },
];