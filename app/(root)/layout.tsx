export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <p className="text-white-1">LEFT </p>
        {children}
        <p className="text-white-1">Right </p>
      </main>
    </div>
  );
}
