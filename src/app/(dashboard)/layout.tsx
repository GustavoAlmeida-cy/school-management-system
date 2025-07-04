export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <b>Dashboard layout</b>
      {children}
    </div>
  );
}
