
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
        <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 overflow-hidden relative">
            {/* Global Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className={cn(
                "container px-4 md:px-6 grid gap-8 items-center relative z-10",
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

    