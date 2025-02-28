import prismaClient from "../../prisma";

class ListProfissionalService{
    async execute(){
        const profissional = await prismaClient.profissional.findMany({
            include:{
                Funcao: true,
            }
        });

        return profissional
    }
}

export { ListProfissionalService }