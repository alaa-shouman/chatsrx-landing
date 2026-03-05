export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-1 select-none">
      <span className="text-xl font-bold text-foreground tracking-tight">
        Chats
      </span>
      {/* Rx prescription icon */}
      <span className="inline-flex items-center justify-center w-8 h-8 border-2 border-primary rounded-sm text-primary font-bold text-sm leading-none">
        R<sub className="text-[10px] -ml-0.5">x</sub>
      </span>
    </a>
  )
}
