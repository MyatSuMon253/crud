"use client";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl } from "./ui/form";
import { Input } from "./ui/input";

const CreateUser = () => {
  const form = useForm();
  const onSubmit = (values: object) => {
    console.log();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormControl>
          <Input placeholder="Enter your name" name="name" width={100} />
          <Input placeholder="Enter your email" name="email" width={100} />
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateUser;
