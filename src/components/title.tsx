interface TitleProps {
    title : string
}
export default function Title({title} : TitleProps){
    return(
        <h1 className="uppercase font-bold mb-5 text-center text-3XL">
            {title}
        </h1>
    )
}