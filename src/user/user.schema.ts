
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  fname: string;

  @Prop()
  lname: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  role: string;


}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const UserSchema = SchemaFactory.createForClass(User);
