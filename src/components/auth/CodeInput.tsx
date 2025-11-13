import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const CodeInput = ({ value, onChange }: CodeInputProps) => {
  return (
    <div className="flex justify-center">
      <InputOTP maxLength={6} value={value} onChange={onChange}>
        <InputOTPGroup className="gap-2">
          <InputOTPSlot index={0} className="w-12 h-14 text-xl border-border bg-input" />
          <InputOTPSlot index={1} className="w-12 h-14 text-xl border-border bg-input" />
          <InputOTPSlot index={2} className="w-12 h-14 text-xl border-border bg-input" />
          <InputOTPSlot index={3} className="w-12 h-14 text-xl border-border bg-input" />
          <InputOTPSlot index={4} className="w-12 h-14 text-xl border-border bg-input" />
          <InputOTPSlot index={5} className="w-12 h-14 text-xl border-border bg-input" />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};
