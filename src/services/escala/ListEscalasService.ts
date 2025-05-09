import prismaClient from "../../prisma";

class ListEscalasService{
    async execute(){
        const escalas = await prismaClient.escala.findMany({
            include: {
                Base: true,
                Veiculo: true,
                User: true,
                EscalaEquipe: true,
            }
        });

        return escalas;
    }
}

export { ListEscalasService }