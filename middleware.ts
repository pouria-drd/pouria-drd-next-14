import { NextResponse, type NextRequest } from "next/server";

async function Middleware(request: NextRequest) {
    console.log("Middleware Request" /*, request*/);
    // Let the request through
    return NextResponse.next();
}

export default Middleware;

// Define the paths where middleware should be applied
export const config = {
    matcher: ["/"],
};
