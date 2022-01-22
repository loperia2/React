export default function Title (props) {
  const { title, onClick } = props
  return <h1 onClick={ onClick }>{ title }</h1>
}