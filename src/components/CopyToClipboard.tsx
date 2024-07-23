"use client"

import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from './ui/button';

interface CopyToClipboardComponentProps {
  textToCopy: string;
}

const CopyToClipboardComponent: React.FC<CopyToClipboardComponentProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
        <Button
        variant="outline"
        className='bg-white'
        >{copied ? 'Copied!' : 'Copy Email'}</Button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyToClipboardComponent;