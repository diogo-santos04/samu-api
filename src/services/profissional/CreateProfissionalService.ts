import prismaClient from "../../prisma";

interface CreateProfissionalRequest {
    nome: string;
    funcao_id: number;
    matricula: string;
    cpf: string;
    data_nascimento: string; //ISO 8601 (YYYY-MM-DD)
    sexo: string;
}

class CreateProfissionalService {
    async execute({
        nome,
        cpf,
        data_nascimento,
        funcao_id,
        matricula,
        sexo,
    }: CreateProfissionalRequest) {
        if (isNaN(Date.parse(data_nascimento))) {
            throw new Error("Formato inválido para data_nascimento. Use YYYY-MM-DD.");
        }
        const profissional = await prismaClient.profissional.create({
            data: {
                nome,
                data_nascimento: new Date(data_nascimento),
                matricula,
                sexo,
                cpf,
                funcao_id,
            },
        });

        return profissional;
    }
}

export { CreateProfissionalService };
