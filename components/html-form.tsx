import { HtmlForm } from "@/sanity/types";
import HTMLFormField from "./html-form-field";
import FormLayout from "./form-layout";

interface HTMLFormProps extends HtmlForm {}

export default function HTMLForm({ fields, id }: HTMLFormProps) {
  if (!fields) return null;
  return (
    <FormLayout>
      <form className="space-y-4 lg:min-w-[400px] pt-5" id={id?.current}>
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
    </FormLayout>
  );
}
