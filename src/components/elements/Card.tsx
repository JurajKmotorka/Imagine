function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-96 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      {children}
    </div>
  );
}

export default Card;
