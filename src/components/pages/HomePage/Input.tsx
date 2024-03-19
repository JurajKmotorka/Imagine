import { useState } from "react";
import * as inputs from "./inputs.json";

function Input({ onSubmit }: { onSubmit: (userInput: string) => void }) {
  const [userInput, setUserInput] = useState("");
  const [placeholderValue, setPlaceholderValue] = useState(
    "Enter an article, blog-post or other entry you want your images generated for. Please make sure your text is at least 50 words long."
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(event.target.value);
    if (event.target.value.length < 50) {
      setPlaceholderValue(
        "Ahh, this text was too short to find perfect images for :(. Please make sure your text is at least 50 words long."
      );
    } else {
      setPlaceholderValue("");
    }
  };

  const handleRandomInput = () => {
    const randomIndex = Math.floor(Math.random() * inputs.articles.length);
    setUserInput(() => inputs.articles[randomIndex].content);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(userInput);
    setUserInput("");
    setPlaceholderValue(
      "Enter an article, blog-post or other entry you want your images generated for. Please make sure your text is at least 50 words long."
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full md:max-w-[50%] h-80 lg:h-96 flex flex-col  rounded-xl  border border-gray-100 "
    >
      <textarea
        className="bg-transparent w-full grow p-4 m-auto xl:text-lg"
        value={userInput}
        onChange={handleInputChange}
        minLength={50}
        onError={() => setPlaceholderValue("Entered text is too short.")}
        placeholder={placeholderValue}
      />
      <div className="border-t-[1px] w-full p-3 flex gap-2 flex-row-reverse">
        <button className="hover:opacity-70" type="submit">
          <span className="   py-1 px-3 rounded-2xl text-indigo-950 font-bold bg-gradient-to-br from-red-500 to-indigo-500">
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
