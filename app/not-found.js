import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-14">
            <div className="text-center text-muted-foreground">
                <h1 className="text-6xl md:text-9xl font-bold">404</h1>
                <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
                <p className="mt-2">The page you are looking for does not exist.</p>
                <Button variant="outline" className="mt-4">
                    <Link
                        href="/"
                    >
                        Return Home
                    </Link>
                </Button>
            </div>
        </div>
    )
}
