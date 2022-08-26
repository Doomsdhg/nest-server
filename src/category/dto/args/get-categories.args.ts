import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetCategoriesArgs {
    @Field({nullable: true})
    id: string;

    @Field({nullable: true})
    title: string;
}