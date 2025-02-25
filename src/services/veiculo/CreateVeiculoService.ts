import prismaClient from "../../prisma";

interface CreateVeiculoRequest{
    nome: string;
    tipo_veiculo_id: number;
    placa: string;
    cnes: string;
    qrcode: string;
    situacao: string;
}

class CreateVeiculoService{
    async execute({ nome, cnes, placa, qrcode, situacao, tipo_veiculo_id}: CreateVeiculoRequest){
        const veiculo = await prismaClient.veiculo.create({
            data:{
                nome,
                cnes,
                placa,
                qrcode,
                situacao,
                tipo_veiculo_id
            },
        })

        return veiculo;
    }
}   

export { CreateVeiculoService }