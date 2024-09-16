// app/(auth)/layout.tsx
import Header from "../components/Header";
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <div>
        <Header />
        <main>{children}</main>
    </div>
    );
}
