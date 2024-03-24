import { SanityDocument } from "next-sanity";

interface FormProps extends SanityDocument {
  htmlId: string;
  fields: FormField[];
}
type FormField = {
  name: string;
  value: string;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    //   "password" |
    | "radio"
    | "range"
    //   "reset" |
    //   "search" |
    //   "submit" |
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  _key: string;
};
export default function Form({ htmlId, fields }: FormProps) {
  return (
    <form id={htmlId}>
      {fields.map(({ name, value, type, _key }) => (
        <input key={_key} name={name} placeholder={value} type={type} />
      ))}
    </form>
  );
}
