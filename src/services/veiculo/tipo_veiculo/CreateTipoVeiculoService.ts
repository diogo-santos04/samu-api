import prismaClient from "../../../prisma";

interface CreateTipoVeiculoRequest{
    nome: string
}

class CreateTipoVeiculoService{
    async execute({ nome }: CreateTipoVeiculoRequest){
        const tipo_veiculo = await prismaClient.tipoVeiculo.create({
            data:{
                nome
            },
            select:{
                id: true,
                nome: true
            }
        })

        return tipo_veiculo
    }
}   

export { CreateTipoVeiculoService }