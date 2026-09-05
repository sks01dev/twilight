import Link from "next/link";

function ButtonLogin(props) {
  if (props.hasLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${props.extraStyle || ""}`}
      >
        Welcome back, {props.name}
      </Link>
    );
  }
  return <button>Login</button>;
}

export default ButtonLogin;
