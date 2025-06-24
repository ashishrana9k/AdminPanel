

import { TabProvider } from '@/app/Context/TabContext';
import Navbar from './Component/Navbar/page';
import './globals.css';
import type { ReactNode } from 'react'; // Import ReactNode

// Add type annotation for children
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TabProvider>
          <div className="grid grid-cols-[13%_87%] h-screen">
            <div>
              <Navbar />
            </div>
            <div>
              {children}
            </div>
          </div>
        </TabProvider>
      </body>
    </html>
  );
}