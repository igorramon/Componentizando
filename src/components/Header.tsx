import '../styles/header.scss';

interface HeaderPops {
  title: string;
}

export function Header(props: HeaderPops) {
  return (
    <header>
      <span className="category">Categoria:<span> {props.title}</span></span>
    </header>
  );
}