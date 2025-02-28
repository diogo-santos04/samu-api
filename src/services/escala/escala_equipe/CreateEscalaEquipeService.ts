import prismaClient from "../../../prisma";

interface EscalaEquipeRequest{
    escala_id: number,
    profissional_id: number,
}

class CreateEscalaEquipeService{
    async execute({ escala_id, profissional_id}: EscalaEquipeRequest){
        const escala_equipe = await prismaClient.escalaEquipe.create({
            data:{
                escala_id,
                profissional_id
            }
        })

        return escala_equipe;
    }
}

export { CreateEscalaEquipeService }