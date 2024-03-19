import { useState } from "react";
import * as inputs from "./inputs.json";

function Input({ onSubmit }: { onSubmit: (userInput: string) => void }) {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(event.target.value);
  };

  const handleRandomInput = () => {
    const randomIndex = Math.floor(Math.random() * inputs.articles.length);
    setUserInput(() => inputs.articles[randomIndex].content);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(userInput);
    setUserInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full md:max-w-[50%] h-80 lg:h-96 flex flex-col  rounded-xl  border border-gray-100 "
    >
      <textarea
        className="bg-transparent w-full grow"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter your article, blog-post or other entry you want your images generated for"
      />
      <div className="border-t-[1px] w-full p-3 flex gap-2 flex-row-reverse">
        <button className="hover:opacity-70" type="submit">
          <span className="  border-2 py-1 px-3 rounded-2xl text-indigo-200 font-medium border-indigo-200">
            Submit
          </span>
        </button>
        <button
          className="hover:opacity-70"
          type="button"
          onClick={handleRandomInput}
        >
          <span className="border py-1 px-3 rounded-2xl">
            Insert random text
          </span>
        </button>
      </div>
    </form>
  );
}

export default Input;
