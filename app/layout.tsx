import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevOS - DevOps automation that understands your codebase',
  description: 'Ship code faster with AI-powered DevOps. Automated workflows, intelligent agents, and Git-native tools that work with your existing setup.',
  openGraph: {
    title: 'DevOS - AI-powered DevOps automation',
    description: 'Ship code faster with AI-powered DevOps. Automated workflows, intelligent agents, and Git-native tools.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
