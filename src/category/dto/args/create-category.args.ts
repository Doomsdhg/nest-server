import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@ArgsType()
export class CreateCategoryArgs {
    
    @IsNotEmpty()
    @IsString()
    @Field()
    title: string;
}