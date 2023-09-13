import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import CreateAccountUI from "./CreateAccount.presenter";

import { useForm } from "react-hook-form";
import { schema } from "../../commons/error/CreateAccount.yup";
import { useMutationCreateUser } from "../../commons/hooks/mutations/useMutationCreateUser";

export default function CreateAccount(): JSX.Element {
  const router = useRouter();
  const [isActive] = useState(false);

  const [createUser] = useMutationCreateUser();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: any): Promise<void> => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            name: data.user,
            password: data.password,
            email: data.email,
            phone: data.phone,
          },
        },
      });

      console.log(result.data?.createUser._id);
      if (result.data?.createUser._id === undefined) {
        alert("error");
        return;
      }

      void router.push(`/boards`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <CreateAccountUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      formState={formState}
      isActive={isActive}
    />
  );
}
