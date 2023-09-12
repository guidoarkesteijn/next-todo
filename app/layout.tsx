import { ThemeProvider } from "@/providers/theme-provider";
import SupabaseProvider from "@/providers/supabase-provider";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";

export const metadata = {
  title: "Godo: Todo App",
  description: "Store your todos in one place!",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background flex flex-col items-center text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SupabaseProvider>
            <Header />
            <main className="m-3">{children}</main>
            <Toaster />
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
