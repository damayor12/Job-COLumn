function Anchor ({ children, href }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  );
}

export default Anchor;