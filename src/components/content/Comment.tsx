import Giscus from '@giscus/react';

type CommentProps = {
  theme?: 'dark' | 'light';
};

const Comment = ({ theme }: CommentProps): JSX.Element => (
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

export default Comment;
