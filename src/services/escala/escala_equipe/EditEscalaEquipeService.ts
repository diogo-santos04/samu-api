import prismaClient from "../../../prisma";

class EditEscalaEquipeService {
    async execute(escala_id, profissionais_ids) {
        await prismaClient.escalaEquipe.deleteMany({
            where: { escala_id }
        });

        const escala = [];
        for (const profissional_id of profissionais_ids) {
            const novaEscala = await prismaClient.escalaEquipe.create({
                data: {
                    escala_id,
                    profissional_id
                }
            });
            escala.push(novaEscala);
        }

        return escala;
    }
}

export { EditEscalaEquipeService };
