import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";

interface LoginData {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>();

  function onSubmit(data: LoginData) {
    fetch("http://localhost:8080/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response:", response);
        if (response?.token) {
          localStorage.setItem("token:", response?.token);
          //para sacar el token y utilizarlo en otro lugar
          /* const token = localStorage.getItem("token"); */
          //para cerrar sesion (borrar el token)
          /* localStorage.removeItem("token"); */
          navigate("/");
        } else {
          toast.error("Nope");
        }
      })
      .catch(() => {
        toast.error("Fallo el fetch :S");
      });
  }

  return (
    <>
      <ToastContainer theme="dark" />
      <header className=" bg-white shadow-md">
        <Navbar isOnline={false} />
      </header>
      <div className="container mx-auto">
        <nav className="flex flex-col col-span-1 border gap-2 bg-white rounded-xl shadow-md mx-80 my-10 p-6 justify-center">
          <h1 className="flex justify-center font-bold text-3xl font-sans">
            Welcome to DEV Community
          </h1>
          <p className="flex justify-center mb-4">
            DEV Community is a community of 1,098,042 amazing developers
          </p>
          <button className="w-full h-12 rounded-lg bg-black hover:bg-black/80 font-sans text-white font-bold">
            Continue with Apple{" "}
          </button>
          <button className="w-full h-12 rounded-lg bg-[rgb(5,49,59)] hover:bg-[rgba(5,49,59,0.80)] font-sans text-white font-bold">
            {" "}
            Continue with Forem{" "}
          </button>
          <button className="w-full h-12 rounded-lg bg-[rgb(36,41,46)] hover:bg-black font-sans text-white font-bold">
            Continue with GitHub
          </button>
          <button className="w-full h-12 rounded-lg bg-[rgb(29,161,242)] hover:bg-[rgb(25,137,207)] font-sans text-white font-bold">
            {" "}
            Continue with Twitter{" "}
          </button>
          <div>
            <div className="border-t mt-4 border-gray-600/30"></div>
            <p className="flex h-5 bg-white justify-center text-sm text-gray-700/90">
              Have a password? Continue with your email address
            </p>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="user_email" className="font-semibold mb-2">
              Email
            </label>
            <input
              type="text"
              className="px-2 border rounded-md shadow-sm h-10 hover:border-gray-500/60"
              {...register("email", {
                required: { value: true, message: "Email required" },
              })}
            />
            <label htmlFor="user_password" className="font-semibold mb-2 mt-2">
              Password
            </label>
            <input
              type="password"
              className="px-2 border rounded-md shadow-sm h-10 hover:border-gray-500/60"
              {...register("password", {
                required: { value: true, message: "Password required" },
              })}
            />

            <div className="mx-7 my-2">
              <label className=" hover:bg-slate-600/10 p-2 rounded-md h-12 w-10">
                <span className="text-sm text-gray-800/80 hover:text-indigo-900">
                  Remember me
                </span>
                <input
                  type="checkbox"
                  className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-indigo-600 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-indigo-800 checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-indigo-600 hover:bg-indigo-800 font-sans text-white font-bold"
            >
              {" "}
              Continue{" "}
            </button>
          </form>
          <a
            href=""
            className="flex justify-center text-sm p-3 text-indigo-600"
          >
            {" "}
            I Forgot my password{" "}
          </a>
        </nav>
      </div>
      <footer className="flex flex-cols-1 justify-center p-6 bg-[rgb(229,229,229)]">
        <Footer></Footer>
      </footer>
    </>
  );
}
