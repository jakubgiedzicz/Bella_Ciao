import Link from "next/link";

export default function OrderListItem( props : {name: string, linkname: string}): JSX.Element{
  console.log(props)
  return (
    <li>
      <Link href={props.linkname}>
        {props.name}
      </Link>
    </li>
  )
}