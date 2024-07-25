"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export const BreadCrumbs = () => {

  const path = usePathname()

  const crumbs = path.split("/").filter(Boolean)

  // crumbs.pop()


  console.log("logging crumb:", crumbs)

  return (
    <div className="px-5 lg:px-36 xl:px-52 py-2 bg-gray-200 border-b-2 border-gray-300">
        <p className="flex"><span className="hidden sm:block text-gray-500">Navigate Shop&nbsp;&nbsp;{"|"}</span>&nbsp;&nbsp;
          {crumbs.map((crumb, index) => {
            const href = "/" + crumbs.slice(0, index + 1).join("/");
            const isLast = index === crumbs.length - 1;
            return (
              <span key={index}>
                {isLast ? (
                  <span className="text-gray-500">{crumb}</span>
                ) : (
                  <Link href={href} className="text-gray-500 dcam-link-hover-orange">
                    {crumb}
                  </Link>
                )}
                {!isLast && <span className="text-gray-500">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>}
              </span>
            );
          })}
        </p>
    </div>
  )
}