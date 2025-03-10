import prismaClient from "../../prisma";

class GetEscalaService{
    async execute(escala_id: number){
        const escala = await prismaClient.escala.findFirst({
            where:{
                id: escala_id            
            }
        })

        return escala;
    }
}

export { GetEscalaService }