import './Title.scss';

interface ITitleProps {
  isWhite: boolean;
  value: string;
}
export const Title = (props: ITitleProps) => {
  const { isWhite, value } = props;
  return <h2 className={`${isWhite ? 'title_white' : 'title_black'}`}> {value}</h2>;
};
export default Title;