/**
 * FormLayout is purely a wrapper to add styles to the form pages, it has no impact on how any of the forms function.
 */
import { ReactNode } from "react";

export default function FormLayout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="rounded-lg bg-white p-8 shadow-lg lg:p-5">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
