import prismaClient from "../../../prisma";

class GetEscalaEquipeService{
    async execute(escala_id: number){
        const escala_equipe = await prismaClient.escalaEquipe.findMany({
            where:{
                escala_id: escala_id
            }
        })

        return escala_equipe;
    }
}

export { GetEscalaEquipeService }