"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import login from "@/actions/login";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Mintando...</Button>
      ) : (
        <Button>Comprar</Button>
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
        <FormButton />
        <p>{state.error}</p>
      </form>
    </>
  );
}
