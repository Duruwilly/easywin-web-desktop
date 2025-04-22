import Button from "../Button/button";
import { useAuthServices } from "../../services/auth";
import { RegisterSchema, TRegister } from "../../types/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../Input/Input";

interface IProps {
  onCloseModal: () => void;
}

const OtherInfoRegistration = ({ onCloseModal }: IProps) => {
  const { authFinalRegister } = useAuthServices();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TRegister>({
    mode: "onBlur",
    resolver: zodResolver(RegisterSchema),
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<TRegister> = async (data) => {
    mutate({
      ...data,
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: authFinalRegister,
    onSuccess: () => {
      onCloseModal();
    },

    onError: () => {
      onCloseModal();
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[360px] !mx-auto flex flex-col gap-8"
    >
      <div className="flex flex-col gap-3">
        <TextInput
          placeholder="Enter your First Name"
          {...register("first_name")}
          error={errors.first_name?.message}
          placeholderColor="#C0C3C8"
          className="border border-[#E1E1E1] outline-none focus:ring-0 mb-0 gap-2.5 !px-4 bg-white text-base !rounded-lg"
          padding="12px"
        />

        <TextInput
          placeholder="Enter your Last Name"
          {...register("last_name")}
          error={errors.last_name?.message}
          placeholderColor="#C0C3C8"
          className="border border-[#E1E1E1] outline-none focus:ring-0 mb-0 gap-2.5 !px-4 bg-white text-base !rounded-lg"
          padding="12px"
        />

        <TextInput
          placeholder="Enter your Email (Optional)"
          {...register("email")}
          error={errors.email?.message}
          placeholderColor="#C0C3C8"
          className="border border-[#E1E1E1] outline-none focus:ring-0 mb-0 gap-2.5 !px-4 bg-white text-base !rounded-lg"
          padding="12px"
        />

        <TextInput
          placeholder="Invitation Code (Optional)"
          {...register("invitation_code")}
          error={errors.invitation_code?.message}
          placeholderColor="#C0C3C8"
          className="border border-[#E1E1E1] outline-none focus:ring-0 mb-0 gap-2.5 !px-4 bg-white text-base !rounded-lg"
          padding="12px"
        />
      </div>
      <Button
        text="Sign Up"
        className="w-full !py-3 rounded-full opacity-30"
        isLoading={isPending}
        disabled={isPending}
      />
    </form>
  );
};

export default OtherInfoRegistration;
