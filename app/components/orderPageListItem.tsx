import Link from "next/link";

export default function OrderListItem(props: any): JSX.Element{
  return (
    <li>
      <Link href={props.linkname}>
        {props.name}
      </Link>
    </li>
  )
}