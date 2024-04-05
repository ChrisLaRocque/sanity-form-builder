"use client";
import { FormspreeForm } from "@/sanity/types";
import { useForm, ValidationError } from "@formspree/react";
import HTMLFormField from "./html-form-field";

export default function FormSpreeForm({ formspreeId, fields }: FormspreeForm) {
  // the field is required in Sanity
  // @ts-expect-error
  const [state, handleSubmit] = useForm(formspreeId);

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="rounded-lg bg-white p-8 shadow-lg lg:p-5">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 lg:min-w-[400px] pt-5"
            >
              {fields &&
                fields.map((field) => (
                  <div key={field._key}>
                    <HTMLFormField {...field} />
                    <ValidationError
                      prefix={field.label}
                      field={field.name}
                      errors={state.errors}
                    />
                  </div>
                ))}
              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-black px-5 py-3 text-sm text-white sm:w-auto"
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </div>
              <ValidationError errors={state.errors} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
