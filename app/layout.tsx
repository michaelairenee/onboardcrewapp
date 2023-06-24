import { Providers } from "@/redux/provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onboardcrewapp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-full">
            <nav className="bg-gray-800">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        <a
                          href="#"
                          className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                          aria-current="page"
                        >
                          Talent
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  <a
                    href="#"
                    className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                    aria-current="page"
                  >
                    Talent
                  </a>
                </div>
              </div>
            </nav>

            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
