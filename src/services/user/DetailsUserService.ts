import prismaClient from "../../prisma";

class DetailUserService{
    async execute(user_id: number){
        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                nome: true,
                email: true,
            }
        })
        return user
    }
}

export { DetailUserService }
