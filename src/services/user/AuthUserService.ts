import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("User/password incorreto");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("User/password incorreto");
    }

    const token = sign(
        {
            nome:user.nome,
            email: user.email,
        },
        process.env.JWT_SECRET,
        {
            subject: String(user.id),
            expiresIn: '1h'
        }
    )
    return { 
        id: user.id,
        nome: user.nome,
        email: user.email,
        token: token,
    };
  }
}

export { AuthUserService };
