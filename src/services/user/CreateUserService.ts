import prismaClient from "../../prisma";
import { hash } from 'bcryptjs';

interface UserRequest{
    nome: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({nome, email, password}: UserRequest){
        if(!email){
            throw new Error("Email Incorreto")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Usuario ja existe");
        }

        const passwordHash = await hash(password, 8);
     
        const user = await prismaClient.user.create({
            data:{
                nome: nome,
                email: email,
                password: passwordHash,
            },
            select:{
                id: true,
                nome: true,
                email: true,
            }
        })
        return user;
    }
}

export {CreateUserService}