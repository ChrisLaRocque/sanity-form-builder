import { HtmlForm } from "@/sanity/types";
import HTMLFormField from "./html-form-field";

export default function HTMLForm(props: HtmlForm) {
  const { htmlId, fields } = props;
  if (!htmlId || !fields) {
    return null;
  }
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
              {fields.map((field) => (
                <HTMLFormField key={field._key} {...field} />
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
