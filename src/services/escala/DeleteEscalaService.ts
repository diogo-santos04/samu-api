import prismaClient from "../../prisma";

class DeleteEscalaService{
    async execute(escala_id: number){
        await prismaClient.escalaEquipe.deleteMany({
            where: {
                escala_id: escala_id
            }
        });

        const escala = await prismaClient.escala.delete({
            where:{
                id: escala_id
            }
        })

        return escala;
    }
}

export { DeleteEscalaService}