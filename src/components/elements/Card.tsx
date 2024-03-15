function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full 0 rounded-md  border border-gray-100 m-auto">
      {children}
    </div>
  );
}

export default Card;
