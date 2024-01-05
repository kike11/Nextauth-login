"use client";
import { Button,  Label } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Password do not match");
    }
   const res = await fetch('/api/auth/register',{
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password
      }),
      headers: { 'Content-Type': 'application/json'
     },
    })
    const resJSON = await res.json();
    console.log(resJSON)
    if (res.ok){
      router.push("/auth/login");
    }
  });
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
            Register
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="" onSubmit={onSubmit}>
            <div>
              <Label htmlFor="user"> User name</Label>
              <div className="mt-2">
                <input
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Please enter your username",
                    },
                  })}
                  placeholder="username123"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                />
                {errors.username && (
                  <span className="text-red-700 text-xs ">
                    {errors.username.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="email"> Email Adress</Label>
              <div className="mt-2">
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter your email address",
                    },
                  })}
                  placeholder="juan@mail.com"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                />
                {errors.email && (
                  <span className="text-red-700 text-xs ">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password"> Password</Label>
              </div>
              <div className="mt-2">
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Please enter your password",
                    },
                  })}
                  id="password"
                  placeholder="********"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                />
                {errors.password && (
                  <span className="text-red-700 text-xs ">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="confirmPassword"> Confirm password</Label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Confirm password is required",
                    },
                  })}
                  placeholder="********"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                />
                {errors.confirmPassword && (
                  <span className="text-red-700 text-xs ">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <Button type="submit">Register</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
