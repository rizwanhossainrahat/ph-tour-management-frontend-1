import { Link } from "react-router";

export default function UnAuthorized() {
  return (
    <>
      <div className="py-16 px-4 container mx-auto">
        <h1> This is unauthroized component </h1>
        <Link to="/">Home</Link>
       
      </div>
    </>
  );
}
