import Giscus from '@giscus/react';
import { useEffect, useState } from 'react';

type CommentProps = {
  theme?: string;
};

const Comment = ({ theme }: CommentProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Giscus
      repo='LordRonz/dtk-class-helper'
      repoId='R_kgDOGmgLYw='
      category='Announcements'
      categoryId='DIC_kwDOGmgLY84CAmjr'
      mapping='pathname'
      reactionsEnabled='0'
      emitMetadata='0'
      theme={theme}
    />
  );
};

export default Comment;
