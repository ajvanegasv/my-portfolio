import { useSignal } from "@preact/signals";

export default function DescriptionExperience(
  { description }: { description: string | undefined },
) {
  const open = useSignal(false);

  return (
    <>
      <div class="flex justify-center">
        <div
          className="text-sm w-5/6 text-center transition-300 hover:text-pallete-secondary-2 border-b cursor-pointer"
          onClick={() => open.value = !open.value}
        >
          Description
        </div>
      </div>
      <div class={`my-2 text-sm text-justify transition-all duration-300 ${open.value ? "max-h-64" : "max-h-0 overflow-hidden"}`}>
        {description}
      </div>
    </>
  );
}
