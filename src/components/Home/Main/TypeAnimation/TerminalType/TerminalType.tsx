import * as React from "react";

export enum typePhase {
  Typing,
  Waiting,
  Done,
}

const TerminalType = (
  strings: string[]
): {
  typedString: string;
  selectedString: string;
  phase: typePhase;
} => {
  const [phase, setPhase] = React.useState(typePhase.Typing);
  const [typedString, setTypedString] = React.useState("");
  const [stringIndex, setStringIndex] = React.useState(0);

  const TYPING_INTERVAL = 50;
  const WAITING_INTERVAL = 2000;
  const DELETING_INTERVAL = TYPING_INTERVAL / 2;

  React.useEffect(() => {
    switch (phase) {
      case typePhase.Typing: {
        const nextTypedString = strings[stringIndex].slice(
          0,
          typedString.length + 1
        );

        if (nextTypedString === typedString) {
          setPhase(typePhase.Waiting);
          return;
        }

        const timeout = setTimeout(() => {
          setTypedString(nextTypedString);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      case typePhase.Waiting: {
        const timeout = setTimeout(() => {
          setPhase(typePhase.Done);
        }, WAITING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      case typePhase.Done: {
        if (!typedString) {
          setPhase(typePhase.Typing);
          const nextIndex = stringIndex + 1;
          setStringIndex(strings[nextIndex] ? nextIndex : 0);
          return;
        }
        const nextRemaining = strings[stringIndex].slice(
          0,
          typedString.length - 1
        );

        const timeout = setTimeout(() => {
          setTypedString(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      default:
        return;
    }
  }, [strings, typedString, stringIndex, phase]);
  return { typedString, selectedString: strings[stringIndex], phase };
};

export default TerminalType;