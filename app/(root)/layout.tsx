import NavBar from "@/components/NavBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen w-full'>
      <NavBar />
      <main className='w-full lg:px-52'>{children}</main>
    </div>
  );
}
