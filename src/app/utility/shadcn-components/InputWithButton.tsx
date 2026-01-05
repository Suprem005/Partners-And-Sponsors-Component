import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <div className="flex border rounded-2xl">
        <Input
          type="email"
          placeholder="Email"
          className="border-0 hover:border-none text-white "
        ></Input>
        <Button type="submit" variant="secondary" className="rounded-xl">
          Submit
        </Button>
      </div>
    </div>
  );
}
