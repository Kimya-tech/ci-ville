type SectionBadgeVariant = 'blue' | 'red' | 'orange' | 'green';

const badgeVariants: Record<SectionBadgeVariant, string> = {
  blue: 'bg-[#E7F1FF] text-[#2F6FD6] border-[#B8D3FF] dark:bg-[#173149] dark:text-[#8AB8FF] dark:border-[#34577A]',
  red: 'bg-[#F7E8EC] text-[#B44D68] border-[#E6B9C5] dark:bg-[#3A2028] dark:text-[#E39AAA] dark:border-[#6D3948]',
  orange: 'bg-[#F8EDE4] text-[#B97A56] border-[#EAC7AF] dark:bg-[#3B281D] dark:text-[#E5B79A] dark:border-[#6F4B35]',
  green: 'bg-[#E8F4EC] text-[#4E9A72] border-[#BEE0CC] dark:bg-[#1F3528] dark:text-[#8FD0AC] dark:border-[#456B53]'
};

export function SectionBadge({ label, variant }: { label: string; variant: SectionBadgeVariant }) {
  return (
    <span className={`inline-block rounded-full border px-5 py-2 ${badgeVariants[variant]}`}>
      {label}
    </span>
  );
}