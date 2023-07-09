import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <header className=" bg-white shadow-md">
        <Navbar isOnline={false} />
      </header>
      <div className="container mx-auto border-helper ">
        <nav>
          <h1>Welcome to DEV Community</h1>
          <p>DEV Community is a community of 1,098,042 amazing developers</p>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <p>Have a password? Continue with your email address</p>
          <label htmlFor="user_email"></label>
          <input type="text" />
          <label htmlFor="password"></label>
          <input type="text" />
        </nav>
      </div>
    </>
  );
}
