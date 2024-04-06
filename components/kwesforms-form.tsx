import { KwesForm } from "@/sanity/types";
import HTMLFormField from "./html-form-field";
import FormLayout from "./form-layout";

export default function KwesFormsForm({ action, fields }: KwesForm) {
  return (
    <FormLayout>
      <form
        action={action}
        method="POST"
        className="space-y-4 lg:min-w-[400px] pt-5"
      >
        {fields &&
          fields.map((field) => <HTMLFormField key={field._key} {...field} />)}

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="inline-block rounded-lg bg-black px-5 py-3 text-sm text-white sm:w-auto"
          >
            Send Enquiry
          </button>
        </div>
      </form>
    </FormLayout>
  );
}
