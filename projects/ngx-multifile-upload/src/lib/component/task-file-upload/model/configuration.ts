import { IConfiguration } from './configuration-type';
import { IRequestOption } from './request-option';

export class Configuration implements IConfiguration {
    allowedContentTypes?: string[];
    allowMultiple?: boolean = false;
    maxFileCount?: number;
    maxFileSize?: number;
    request: IRequestOption;
    dropZoneClass: string ;
    dragOverClass: string ;
    fileUploadProgressClass: string;
}