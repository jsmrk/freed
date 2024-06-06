import NavBar from "@/components/Nav/NavBar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { sessionId } = await auth();
  if (!sessionId) return redirect("/welcome");

  return (
    <div className='min-h-screen w-full'>
      <NavBar />
      <main className='h-full max-w-[1000px] m-auto'>{children}</main>
    </div>
  );
}
