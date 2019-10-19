import React from 'react'
import { LoremIpsum } from "lorem-ipsum";

export interface DummyTextProps {
  words: number;
  sentances: number;
  paragraphs: number;
  className: string;
}

const DummyText: any = (props: DummyTextProps) => {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });
    
    let text = '';
    if(!!props.words) {
      text = lorem.generateWords(props.words);
    } else if(props.sentances) {
      text = lorem.generateSentences(props.sentances);
    } else if(props.paragraphs) {
      text = lorem.generateParagraphs(props.paragraphs);
    }

    return <p className={props.className}>{text}</p>
}

export default DummyText;