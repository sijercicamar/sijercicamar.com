/** Small pill shown next to the category on projects that include an admin dashboard. */
export default function AdminLabel({ size = "md" }: { size?: "sm" | "md" }) {
  const cls =
    size === "sm"
      ? "text-[10px] px-2 py-0.5 tracking-[0.12em]"
      : "text-[11px] px-2.5 py-1 tracking-[0.14em]"
  return (
    <span className={`${cls} font-medium uppercase border rounded-full text-sky-300 border-sky-300/25 bg-sky-300/5 whitespace-nowrap`}>
      Admin Dashboard
    </span>
  )
}
