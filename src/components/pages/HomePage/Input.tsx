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
        <textarea
          className="bg-transparent w-full h-[20vh] sm:h-96"
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter your article, blog-post or other entry you want your images generated for"
        />
        <button className="border-t-[1px] w-full p-2" type="submit">
          <span className="border-[1px] py-1 px-3 rounded-2xl">Submit</span>
        </button>
      </form>
    </div>
  );
}

export default Input;
