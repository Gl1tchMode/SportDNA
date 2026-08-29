"use client";

import { usePathname } from "next/navigation";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-transition">
      {children}

      <style jsx global>{`
        .page-transition {
          animation: pageEnter 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes pageEnter {
          from {
            opacity: 0;
            transform: translateX(24px) scale(0.98);
            filter: blur(8px);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
}