'use client'
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"

export default function HeaderContent({ children }: { children?: React.ReactNode }) {
  const isMobile = useIsMobile()
  console.log(isMobile);

  return <nav className="h-14 sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
    <div className="h-full mx-auto gap-2 flex justify-between items-center">
      <div>

      </div>
      <div>
        {children}
      </div>
      <div>
        {isMobile && <SidebarTrigger />}
      </div>
    </div>
  </nav>;
}
