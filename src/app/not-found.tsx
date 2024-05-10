'use client';

import './[locale]/globals.css'

export default function NotFound() {
  return (
    <html>
      <body className='text-center'>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className='mt-10 font-semibold'>Something went wrong!</h1>
        </main>
      </body>
    </html>
  );
}