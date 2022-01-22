import Title from "./Title"
import Image from "./Image"

export default function Book (props) {
  const { src, title } = props
  const alertText = (text) => {
    console.log(text)
  }
  return (
    <article className='book'>
      <Image src={src}/>
      <Title title={title} onClick={() => alertText(title)} />
    </article>
  )
}