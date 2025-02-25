import prismaClient from "../../prisma";

class ListVeiculoService{
    async execute(){
        const veiculos = await prismaClient.veiculo.findMany();

        return veiculos;
    }
}

export { ListVeiculoService }