import * as yup from "yup";

export const usuarioSchema = yup.object({
  nome: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .required("Email é obrigatório!")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Insira um email válido!"
    ),
  senha: yup.string().required("Senha é obrigatório!"),
});

export const usuarioSchemaLogin = yup.object({
  email: yup
    .string()
    .required("Email é obrigatório!")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Insira um email válido!"
    ),
  senha: yup.string().required("Senha é obrigatório!"),
});

export const empregoSchema = yup.object({
  empresa: yup.string().required("Empresa é obrigatório!"),
  cargo: yup.string().required("Cargo é obrigatório!"),
  status: yup.string().optional(),
});

export const validar =
  (schema: any) => async (req: any, res: any, next: any) => {
    const body = req.body;
    try {
      await schema.validate(body);
      next();
    } catch (error: any) {
      return res
        .status(500)
        .json({ erro: error.name, mensagem: error.message });
    }
  };
