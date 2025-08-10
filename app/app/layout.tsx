import './globals.css';

export const metadata = {
  title: 'Zarn — Protective Security AI',
  description: 'AI that guards your public footprint—across web and social.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
