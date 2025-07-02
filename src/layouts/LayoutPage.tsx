
import HeaderContent from "./HeaderContent";
export default function LayoutContent({
  header,
  children,
}: {
  header?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main>
      <HeaderContent>{header}</HeaderContent>
      <div className="container mx-auto">
        {children}
      </div>
    </main>
  );
}