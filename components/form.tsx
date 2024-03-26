import { SanityDocument } from "next-sanity";

interface FormProps extends SanityDocument {
  htmlId: { current: string };
  fields: FormField[];
}
type FormField = {
  name: string;
  label: string;
  type: // | "button"
  // | "checkbox"
  // | "color"
  // | "date"
  // | "datetime-local"
  | "email"
    // | "file"
    // | "hidden"
    // | "image"
    // | "month"
    // | "number"
    //   "password" |
    // | "radio"
    // | "range"
    //   "reset" |
    //   "search" |
    //   "submit" |
    // | "tel"
    // | "time"
    // | "url"
    // | "week"
    | "text";
  _key: string;
};
export default function Form({ htmlId, fields }: FormProps) {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="rounded-lg bg-white p-8 shadow-lg lg:p-5">
            <form
              action="#"
              className="space-y-4 lg:min-w-[400px] pt-5"
              id={htmlId.current}
            >
              {fields.map(({ name, label, type, _key }) => (
                <label
                  key={_key}
                  htmlFor={name}
                  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    type={type}
                    id={name}
                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    {label}
                  </span>
                  {type == "email" && (
                    <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </label>
              ))}

              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-black px-5 py-3 text-sm text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
