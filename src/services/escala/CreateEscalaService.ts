import prismaClient from "../../prisma";

interface CreateEscalaRequest{
    base_id: number,
    veiculo_id: number,
    data_inicio: string,
    turno: string,
    km_inicial: string,
    km_final: string,
    combustivel: string,
    situacao: string,
    user_id: number;
}

class CreateEscalaService{
    async execute({ base_id, combustivel, data_inicio, km_final, km_inicial, situacao, turno, user_id, veiculo_id}: CreateEscalaRequest){
        const escala = await prismaClient.escala.create({
            data:{
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
        })

        return escala;
    }
}

export { CreateEscalaService }