"use client";

import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Mintando...</Button>
      ) : (
        <Button>Mintar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form action={action}>
        <input
          type="text"
          name="idFigurinha"
          placeholder="Id Figurinha"
        ></input>
        <input type="number" name="quantidade" placeholder="Quantidade"></input>
        <FormButton />
        <p>{state.error}</p>
      </form>
    </>
  );
}
