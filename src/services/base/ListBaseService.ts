import prismaClient from "../../prisma";

class ListBaseService{
    async execute(){
        const bases = await prismaClient.base.findMany({
            select:{
                id: true,
                nome: true
            }
        });

        return bases;
    }
}

export { ListBaseService }