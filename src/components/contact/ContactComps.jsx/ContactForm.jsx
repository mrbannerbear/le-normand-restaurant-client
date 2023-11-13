import { useForm } from "react-hook-form"

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const handleForm = (d) => {
        console.log(d)
      }

  return (
    <>
    <form onSubmit={handleSubmit(handleForm)}>
      <p className="flex gap-3">
        <input type="text" { ...register("lastName") } className="text w-1/2" placeholder="Last Name" />
        <input type="text" { ...register("firstName") } className="text w-1/2" placeholder="First Name" />
      </p>
      <p className="flex gap-3">
        <input type="email" { ...register("email") } className="w-1/2" placeholder="Email" />
        <input type="number" { ...register("phone", { valueAsNumber: true }) } className="w-1/2" placeholder="Telephone" />
      </p>
      <p className="w-full">
        <textarea { ...register("message") }
          className="w-full"
          rows="2"
          placeholder="Message"
        />
      </p>
      <p className="flex justify-end">
        <input
          className="bg-olive-600 text-olive-50"
          type="submit"
          value="Send"
        />
      </p>
      </form>
    </>
  );
};

export default ContactForm;
