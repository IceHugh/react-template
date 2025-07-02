import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/common/ThemeSwitcher";

export function ActionSidebar() {
  return (
    <div className="flex items-center gap-2 mt-auto justify-end">
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  )
}