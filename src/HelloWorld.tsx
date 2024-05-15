import React from 'react';

type Props = {
    message: string;
}

const HelloWorld: React.FC<Props> = (prop) =>
    {
        return <h1>Hello {prop.message}</h1>;
    };
export default HelloWorld;


