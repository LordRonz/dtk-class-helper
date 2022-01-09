import { useRef } from 'react';

export const Pre = (props: React.ComponentPropsWithRef<'pre'>) => (
  <pre {...props}>
    {props.children}
    <style jsx>{`
      pre {
        position: relative;
      }
    `}</style>
  </pre>
);

const Code = (props: React.ComponentPropsWithRef<'code'>) => {
  const textRef = useRef<HTMLDivElement>(null);

  const language =
    props.className?.includes('language') && props.className.replace('language-', '').replace(' code-highlight', '');

  return (
    <code {...props} data-code-type={language && 'code-block'}>
      {language ? (
        <div ref={textRef} className='overflow-x-auto'>
          {props.children}
        </div>
      ) : (
        <span>{props.children}</span>
      )}
    </code>
  );
};

export default Code;
