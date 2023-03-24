import { useCallback, useState } from "preact/hooks";
import { FaTelegramPlane } from "react-icons/fa";

export default function FormContact() {
  const [status, setStatus] = useState<"sending" | "sent" | "failed">();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = useCallback(async (event: Event) => {
    event.preventDefault();
    try {
      setStatus("sending");
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (response.status !== 200) throw Error;
      setStatus("sent");
    } catch (e) {
      setStatus("failed");
    }
  }, [form]);

  return (
    <form onSubmit={submit}>
      <div class="mb-3">
        <label class="block mb-2" for="name">Name</label>
        <input
          class="block bg-pallete-primary w-full p-2 border rounded hover:border-pallete-secondary-2 focus:border-pallete-secondary-2 transition-300"
          type="text"
          name="name"
          id="name"
          required
          onInput={(e) => {
            setForm((current) => ({
              ...current,
              name: e.currentTarget.value
            }))
          }}
        />
      </div>
      <div class="mb-3">
        <label class="block mb-2" for="mail">Email</label>
        <input
          class="block bg-pallete-primary w-full p-2 border rounded hover:border-pallete-secondary-2 focus:border-pallete-secondary-2 transition-300"
          type="text"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          id="email"
          name="email"
          onInput={(e) => {
            setForm((current) => ({
              ...current,
              email: e.currentTarget.value
            }))
          }}
          required
        />
      </div>
      <div class="mb-3">
        <label class="block mb-2" for="message">Message</label>
        <textarea
          class="block bg-pallete-primary p-2 w-full border rounded hover:border-pallete-secondary-2 focus:border-pallete-secondary-2 transition-300"
          name="message"
          id="message"
          rows={5}
          onInput={(e) => {
            setForm((current) => ({
              ...current,
              message: e.currentTarget.value
            }))
          }}
          required
        >
        </textarea>
      </div>
      <div class="mb-3 flex justify-end items-center">
        <button class="flex items-center gap-3 font-bold border hover:border-pallete-secondary-2 hover:text-pallete-secondary-2 transition-300 rounded p-1.5">
          <FaTelegramPlane /> Send
        </button>
      </div>
    </form>
  );
}
