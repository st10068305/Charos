import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Route = createFileRoute("/authentication/login")({
  component: Login,
});

const loginSchema = z.object({
  username: z.string(),
  accountNumber: z
    .string()
    .min(10, "Please enter an account number with at least 10 digits.")
    .max(10, "Please enter an account number with at most 10 digits.")
    .regex(
      /([0-9])*/g,
      "Please ensure that you have entered a valid Account Number, e.g. 2348930424"
    ),
  password: z
    .string()
    .min(8, "Please enter a password with at least 8 characters."),
});

function Login() {
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      accountNumber: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {};

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col w-full space-y-5 lg:max-w-lg p-5">
        <div className="flex flex-col items-center justify-center w-full space-y-3">
          <Label className="text-2xl text-primary">Login</Label>
          <Label className="text-muted-foreground">
            Please enter your login details below.
          </Label>
        </div>

        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(onSubmit)}
            className="flex flex-col w-full h-auto space-y-3"
          >
            <FormField
              control={loginForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe" {...field} />
                  </FormControl>
                  <FormDescription>This is your username.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={loginForm.control}
              name="accountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Number</FormLabel>
                  <FormControl>
                    <Input placeholder="8930424356" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your account number.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Secure Password" {...field} />
                  </FormControl>
                  <FormDescription>This is your password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Continue</Button>
          </form>
        </Form>

        <div className="flex flex-col w-full h-auto space-y-3">
          <div className="flex items-center space-x-3">
            <Label>Don't have a registered account?</Label>

            <Link to="/authentication/register">
              <Label className="underline cursor-pointer text-primary">
                Register
              </Label>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
