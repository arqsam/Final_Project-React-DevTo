import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { User, Auth } from "../types/common.types";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Register() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<User>();

  async function onSubmit(data: User) {
    const response = await fetch(
      "http://localhost:8080/users",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: {
            first: data.name.first,
            last: data.name.last,
          },
          location: data.location,
          work: data.work,
          picture: `https://api.dicebear.com/6.x/notionists/svg?seed=${data.name.first}${data.name.last}`,
          description: data.description,
          login: {
            email: data.login?.username,
            password: data.login?.password,
          },
        }),
      },
      []
    );
    const res = (await response.json()) as Auth;
    console.log("RES: ", res);
    if (res?.data) {
      navigate("/Login");
    } else {
      toast.error("Could not register");
    }
  }

  return (
    <>
      <ToastContainer theme="dark" />
      <header className=" bg-white shadow-md">
        <Navbar />
      </header>
      <div className="container mx-auto flex justify-center p-2">
        <nav className="flex flex-col w-[65%] col-span-1 border gap-2 bg-white rounded-xl shadow-md mx-80 my-10 p-6 justify-center">
          <h1 className="flex justify-center pt-1 font-bold text-3xl font-sans mt-2">
            Welcome to DEV Community
          </h1>
          <p className="flex justify-center mb-8">
            DEV Community is a community of 1,098,042 amazing developers
          </p>
          <form
            className="flex flex-col justify-center"
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
          >
            <Card color="transparent" shadow={false}>
              <div className="flex flex-col justify-center text-center">
                <Typography variant="h4" color="blue-gray">
                  Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Enter your details to register.
                </Typography>
              </div>

              <div className="my-5 mx-10 flex flex-col gap-6 justify-center">
                <Input
                  size="lg"
                  label="Name"
                  {...register("name.first", {
                    required: { value: true, message: "Name Required" },
                  })}
                />
                <Input
                  size="lg"
                  label="Last Name"
                  {...register("name.last", {
                    required: { value: true, message: "Last Name Required" },
                  })}
                />
                <Input
                  size="lg"
                  label="Location"
                  {...register("location", {
                    required: { value: true, message: "Location Required" },
                  })}
                />
                <Input
                  size="lg"
                  label="Work Description"
                  {...register("work", {
                    required: {
                      value: true,
                      message: "Work description Required",
                    },
                  })}
                />
                <Input
                  className="flex h-16"
                  size="lg"
                  label="About You"
                  {...register("description", {
                    required: { value: true, message: "About You Required" },
                  })}
                />
                <div className="mt-4 flex flex-col gap-6">
                  <Input
                    className="flex"
                    size="lg"
                    label="Email"
                    {...register("login.username", {
                      required: { value: true, message: "Email Required" },
                    })}
                  />
                  <Input
                    type="password"
                    size="lg"
                    label="Password"
                    {...register("login.password", {
                      required: { value: true, message: "Password Required" },
                    })}
                  />
                </div>
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-blue-500"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button
                type="submit"
                value="Register"
                className="mt-6 text-white bg-indigo-600 rounded-md hover:bg-indigo-600/90"
                fullWidth
              >
                Register
              </Button>
              <Link to="/Login">
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                  >
                    Sign In
                  </a>
                </Typography>
              </Link>
            </Card>
          </form>
        </nav>
      </div>
      <footer className="flex flex-cols-1 justify-center p-6 bg-[rgb(229,229,229)]">
        <Footer></Footer>
      </footer>
    </>
  );
}
