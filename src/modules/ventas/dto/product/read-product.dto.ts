import { Expose } from 'class-transformer';
import { CategoryEntity } from '../../entities/category.entity';
import { BaseProductDto } from './base-product.dto';

export class ReadProductDto extends BaseProductDto {
  @Expose()
  readonly title: string;

  @Expose()
  readonly price: number;

  @Expose()
  readonly descripcion: string;

  @Expose()
  readonly images: string[];

  @Expose()
  readonly category: CategoryEntity;
}
