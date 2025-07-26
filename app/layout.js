export const metadata = {
  title:
    "CortexFlow - Open-source Container Networking Infrastructure and Monitoring Platform",
  description:
    "Your end-end-to end platform for creating and managing lightweight, intelligent and efficient service mesh architectures, to seamlessly connect cloud and edge devices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
