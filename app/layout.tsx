import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Spotify Clone",
    description: "Listen to music",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={figFont.className}>{children}</body>
        </html>
    );
}
