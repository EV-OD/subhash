
'use client';
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PageHeaderProps {
    tag: string;
    title: string;
    subtitle: string;
    actions?: React.ReactNode;
    children?: React.ReactNode;
    isCentered?: boolean;
}

export function PageHeader({ tag, title, subtitle, actions, children, isCentered = false }: PageHeaderProps) {
    const titleParts = title.split(' ');
    const lastWord = titleParts.pop();
    const restOfTitle = titleParts.join(' ');
    
    return (
        <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-card dotted-background overflow-hidden relative">
            {/* <div className="absolute top-20 -left-10 w-24 h-24 border-2 border-primary/30 rounded-full"></div>
            <div className="absolute bottom-1/4 -left-20 w-40 h-40 border-4 border-primary/10 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-accent/30 rounded-full"></div>
            <div className="absolute bottom-16 right-1/3 w-8 h-8 border-2 border-accent/40 rounded-full"></div>
            <div className="absolute top-24 right-10 w-16 h-16 border-4 border-primary/20 rounded-full"></div> */}

            <div className={cn(
                "container px-4 md:px-6 grid gap-8 items-center relative",
                children ? "lg:grid-cols-2" : "grid-cols-1"
            )}>
                <div className={cn(
                    "space-y-6",
                    isCentered && "text-center lg:text-center"
                )}>
                    <p className={cn(
                        "inline-block px-3 py-1 text-sm font-semibold rounded-full bg-primary/10 text-primary",
                         isCentered && "mx-auto"
                    )}>
                        {tag}
                    </p>
                    <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                        {restOfTitle} <span className="text-primary">{lastWord}</span>
                    </h1>
                    <p className={cn(
                        "max-w-[600px] text-muted-foreground md:text-xl",
                        isCentered ? "mx-auto" : "mx-auto lg:mx-0"
                    )}>
                        {subtitle}
                    </p>
                    {actions && <div>{actions}</div>}
                </div>
                {children && <div className="">{children}</div>}
            </div>
      </section>
    )
}

    