"use client"
import { useEffect, useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

interface CodeViewerProps {
  filePath: string; // Example: 'code/CodePreview.tsx'
}

const CodeViewer: React.FC<CodeViewerProps> = ({ filePath }) => {
  const [code, setCode] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(`/${filePath}`);
        if (response.ok) {
          const codeText = await response.text();
          setCode(codeText);
        } else {
          setCode('Error: Unable to fetch code.');
        }
      } catch (error) {
        setCode('Error: Unable to fetch code.');
      }
    };

    fetchCode();
  }, [filePath]);

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className='relative text-white py-2 px-4'>
      <button
        onClick={handleCopy}
        className='absolute right-4 pt-2'
      >
            {copied ? <FiCheck /> : <FiCopy />}
      </button>
      <pre className='overflow-x-scroll no-scrollbar'>
        <code>{code || 'Loading...'}</code>
      </pre>
    </div>
  );
};

export default CodeViewer;