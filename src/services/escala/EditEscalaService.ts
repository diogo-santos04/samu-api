import prismaClient from "../../prisma";

interface EditEscalaRequest {
    id: number | string;
    base_id: number;
    veiculo_id: number;
    data_inicio: string;
    turno: string;
    km_inicial: string;
    km_final: string;
    combustivel: string;
    situacao: string;
    user_id: number;
}

class EditEscalaService {
    async execute({ id, base_id, combustivel, data_inicio, km_final, km_inicial, situacao, turno, user_id, veiculo_id }: EditEscalaRequest) {
        const escala = await prismaClient.escala.update({
            where: {
                id: Number(id)
            },
            data: {
                base_id,
                combustivel,
                data_inicio: new Date(data_inicio),
                km_final,
                km_inicial,
                situacao,
                turno,
                user_id,
                veiculo_id
            }
        });

        return escala;
    }
}

export { EditEscalaService };