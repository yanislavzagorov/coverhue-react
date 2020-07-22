import React from "react";

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text?: string;
    ok?: boolean;
    i?: number;
    fn?: () => void;
    fn_returns_number?: (bob: string) => string;
    //obj? {
    //    f1: string;
    //};
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = () => {
    const [count, setCount] = React.useState<TextNode>({ text: "hello" });
    const inputRef = React.useRef<HTMLInputElement>(null);
    const divRef = React.useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    )
}