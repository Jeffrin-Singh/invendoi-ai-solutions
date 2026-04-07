import { cn } from "../../lib/cn.js";

export default function Card({ className = "", children }) {
    return <div className={cn("glass rounded-2xl", className)}>{children}</div>;
}