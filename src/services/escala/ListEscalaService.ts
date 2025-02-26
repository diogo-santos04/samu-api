import prismaClient from "../../prisma";

class ListEscalaService{
    async execute(){
        const escalas = await prismaClient.escala.findMany();

        return escalas;
    }
}

export { ListEscalaService }