import React from 'react';

interface CodeLineProps {
  text: string;
}

const CodeLine = (props: CodeLineProps) => <pre>{props.text}</pre>;

export default CodeLine;
