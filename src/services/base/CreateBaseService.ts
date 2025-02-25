import prismaClient from "../../prisma";

interface CreateBaseRequest{
    nome: string
}

class CreateBaseService{
    async execute({ nome }: CreateBaseRequest){
        if(nome === ""){
            throw new Error("Nome invalido")
        }

        const base = await prismaClient.base.create({
            data:{
                nome: nome
            },
            select: {
                id: true,
                nome: true
            }
        })

        return base
    }

}

export { CreateBaseService }