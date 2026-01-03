import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AuthorAvatarProps {
  name: string
  image?: string | null
  className?: string
}

export function AuthorAvatar({ name, image, className }: AuthorAvatarProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Using DiceBear 'notionists' style for a professional yet dynamic illustration
  const fallbackUrl = `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(name)}`;

  return (
    <Avatar className={className}>
      <AvatarImage src={image || fallbackUrl} alt={name} className="object-cover" />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}
