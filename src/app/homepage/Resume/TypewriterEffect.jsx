"use client"
import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
function TypewriterEffect({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;

      if (index === text.length - 1) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <>
<Typography variant="h1">heading 1</Typography>
<Typography variant="h2">heading 2</Typography>
<Typography variant="h3">heading 3</Typography>
<Typography variant="h4">heading 4</Typography>
<Typography variant="h5">heading 5</Typography>
<Typography variant="h6">heading 6</Typography>
<Typography variant="h7">heading 7</Typography>

<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
  <span>{displayedText}</span>
  </>

  ;
}

export default TypewriterEffect;
