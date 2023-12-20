import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function RootLayout(props: Props) {
    return (
        <html lang="en">
            <body>{props.children}</body>
        </html>
    );
}
