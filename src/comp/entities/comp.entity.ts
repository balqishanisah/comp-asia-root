import { Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product', { schema: 'public' })
export class CompEntity {
  @Field()
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'uuid_generate_v4()',
  })
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column('character varying', { name: 'name', length: 100 })
  name: string;

  @Field()
  @Column('character varying', { name: 'color', length: 100 })
  color: string;

  @Field()
  @Column('character varying', { name: 'brand', length: 100 })
  brand: string;

  @Field()
  @Column('character varying', { name: 'category', length: 100 })
  category: string;

  @Field()
  @Column('numeric', { name: 'price', precision: 21, scale: 2 })
  price: number;

  @Field()
  @Column('character varying', { name: 'image_url', length: 255 })
  imageUrl: string;

  @Field()
  @Column('varchar', {
    name: 'status',
    length: 10,
  })
  status: string;

  @Field(() => Date, { nullable: true })
  @Column('timestamp with time zone', { name: 'order_time' })
  orderTime: Date | null;
}
