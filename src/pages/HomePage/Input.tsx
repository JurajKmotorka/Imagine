import { useState } from "react";

function Input({ onSubmit }: { onSubmit: (userInput: string) => void }) {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(userInput);
    setUserInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Input;
