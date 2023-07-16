import { useState } from "react";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await signup(email, password);
  };

  return (
    <div className="TempPlate">
      <form className="Form" onSubmit={handleSubmit}>
        <p>Sign Up</p>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <button disabled={""}>Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
