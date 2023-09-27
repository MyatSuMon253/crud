"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Inputs = {
  name: string
  email: string
}

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Name" name="name" />
          <Input type="email" placeholder="Email" name="email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateUser;
