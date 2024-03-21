"use server";

import MensagemErro from "@/functions/error";

export default async function login(state: {}, formData: FormData) {
  try {
    const idFigurinha = (formData.get("idFigurinha") as String) || null;
    const quantidade = (formData.get("quantidade") as String) || null;
    console.log(idFigurinha, quantidade);

    if (!idFigurinha || !quantidade) throw new Error("Preencha os dados");
    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return MensagemErro(error);
  }
}
