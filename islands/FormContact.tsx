import { FaTelegramPlane } from "react-icons/fa"

export default function FormContact() {

  return (
    <form>
      <div class="mb-3">
        <label class="block mb-2" for="name">Name</label>
        <input class="block bg-pallete-primary w-full p-2 border rounded focus:border-pallete-secondary-2 transition-300" type="text" name="name" id="name" />
      </div>
      <div class="mb-3">
        <label class="block mb-2" for="mail">Email</label>
        <input class="block bg-pallete-primary w-full p-2 border rounded focus:border-pallete-secondary-2 transition-300" type="text" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" />
      </div>
      <div class="mb-3">
        <label class="block mb-2" for="message">Message</label>
        <textarea class="block bg-pallete-primary p-2 w-full border rounded focus:border-pallete-secondary-2 transition-300" name="message" id="message" rows={5}></textarea>
      </div>
      <div class="mb-3 flex justify-end items-center">
        <button class="flex items-center gap-3 font-bold border hover:border-pallete-secondary-2 hover:text-pallete-secondary-2 transition-300 rounded p-1.5">
          <FaTelegramPlane /> Send
        </button>
      </div>
    </form>
  );
}