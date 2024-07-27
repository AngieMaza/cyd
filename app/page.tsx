export default function Home() {
  return (
    <main className="flex items-center justify-center">
        <div
          className="bg-cover bg-center w-full h-full flex justify-center items-center min-h-screen min-w-screen"
          style={{ backgroundImage: "url('porx-bg.png')" }}
        >
          <h1 className="text-center font-bold text-[50px] lg:text-[100px]">Próximamente</h1>
        </div>
    </main>
  );
}
