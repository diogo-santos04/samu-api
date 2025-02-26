import prismaClient from "../../prisma";

class ListVeiculoService{
    async execute(){
        const veiculos = await prismaClient.veiculo.findMany({
            select: {
                id: true,
                nome: true,
                tipo_veiculo_id: true,
                placa: true,
                cnes: true,
                qrcode: true,
                situacao: true
            }
        });

        return veiculos;
    }
}

export { ListVeiculoService }