import { cn } from '@/utils/tailwind'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-foreground/40 dark:bg-muted',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
