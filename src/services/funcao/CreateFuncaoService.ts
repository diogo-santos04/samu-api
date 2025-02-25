import prismaClient from "../../prisma";

interface CreateFuncaoRequest{
    nome: string;
}

class CreateFuncaoService{
    async execute({ nome }: CreateFuncaoRequest){
        if(nome === ""){
            throw new Error("Nome invalido");
        }

        const funcao = await prismaClient.funcao.create({
            data:{
                nome,
            }
        })

        return funcao;
    }
}   

export { CreateFuncaoService }